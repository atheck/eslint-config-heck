// Compares the rules exported by every ESLint plugin (and ESLint core) against the
// rules configured in nodeWithBiome.js.
// Usage: node .claude/scripts/checkRuleCoverage.js
//
// Reports per plugin:
//   - missing:    rules the plugin exports that are not configured (new rules)
//   - unknown:    configured rules the plugin no longer exports (removed / renamed)
//   - deprecated: configured rules the plugin marks as deprecated (with replacement, if any)

import process from "node:process";
// biome-ignore lint/suspicious/noDeprecatedImports: ESLint offers no other API to list its core rules
import { builtinRules } from "eslint/use-at-your-own-risk";
import config from "../../nodeWithBiome.js";

const configuredRules = new Set(
	config.flatMap((entry) => Object.keys(entry.rules ?? {})),
);
const plugins = new Map([["", { rules: Object.fromEntries(builtinRules) }]]);
const pluginEntries = config.flatMap((entry) =>
	Object.entries(entry.plugins ?? {}),
);

for (const [prefix, plugin] of pluginEntries) {
	plugins.set(prefix, plugin);
}

function fullName(prefix, rule) {
	return prefix ? `${prefix}/${rule}` : rule;
}

function replacementOf(meta) {
	const info = meta?.deprecated;
	const replacedBy =
		meta?.replacedBy ??
		(typeof info === "object" ? info.replacedBy : undefined) ??
		[];

	return replacedBy
		.map((replacement) =>
			typeof replacement === "string" ? replacement : replacement.rule?.name,
		)
		.filter(Boolean)
		.join(", ");
}

// Some plugins export the same rule object under several names (aliases, e.g. `x-globals` and `globals`
// in @eslint-react). Keep only the first name per rule object and mark it as configured when any alias is.
function uniqueRules(prefix, allExported) {
	const canonicalByDefinition = new Map();

	for (const [rule, definition] of allExported) {
		if (!canonicalByDefinition.has(definition)) {
			canonicalByDefinition.set(definition, rule);
		}

		if (configuredRules.has(fullName(prefix, rule))) {
			configuredRules.add(
				fullName(prefix, canonicalByDefinition.get(definition)),
			);
		}
	}

	return [...canonicalByDefinition].map(([definition, rule]) => [
		rule,
		definition,
	]);
}

function findMissing(prefix, exported) {
	return exported
		.filter(
			([rule, definition]) =>
				!(
					configuredRules.has(fullName(prefix, rule)) ||
					definition.meta?.deprecated
				),
		)
		.map(([rule]) => fullName(prefix, rule));
}

function findUnknown(prefix, allExported) {
	const exportedNames = new Set(
		allExported.map(([rule]) => fullName(prefix, rule)),
	);

	return [...configuredRules].filter((rule) => {
		const slash = rule.lastIndexOf("/");
		const rulePrefix = slash === -1 ? "" : rule.slice(0, slash);

		return rulePrefix === prefix && !exportedNames.has(rule);
	});
}

function findDeprecated(prefix, exported) {
	return exported
		.filter(
			([rule, definition]) =>
				configuredRules.has(fullName(prefix, rule)) &&
				definition.meta?.deprecated,
		)
		.map(([rule, definition]) => {
			const replacement = replacementOf(definition.meta);
			const name = fullName(prefix, rule);

			return replacement ? `${name} -> ${replacement}` : name;
		});
}

function analyze(prefix, plugin) {
	const allExported = Object.entries(plugin.rules ?? {});
	const exported = uniqueRules(prefix, allExported);

	return {
		missing: findMissing(prefix, exported),
		unknown: findUnknown(prefix, allExported),
		deprecated: findDeprecated(prefix, exported),
	};
}

const lines = [];

for (const [prefix, plugin] of plugins) {
	const findings = Object.entries(analyze(prefix, plugin)).filter(
		([, list]) => list.length > 0,
	);

	if (findings.length === 0) {
		continue;
	}

	lines.push("", `## ${prefix || "eslint (core)"}`);

	for (const [label, list] of findings) {
		lines.push(`  ${label}:`, ...list.map((rule) => "    - ".concat(rule)));
	}
}

if (lines.length === 0) {
	lines.push(
		"All plugin rules are configured; no unknown or deprecated rules found.",
	);
}

process.stdout.write(`${lines.join("\n")}\n`);
