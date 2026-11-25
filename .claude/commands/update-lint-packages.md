# Update lint packages

You are helping migrate this project to new versions of its lint packages: Biome, ESLint core, and every ESLint plugin. This command works out which packages changed, then runs the matching migration for each one. It reuses the existing commands instead of duplicating them:

- `@biomejs/biome` → follow `.claude/commands/update-biome.md`
- `eslint-plugin-unicorn` → follow `.claude/commands/update-unicorn.md`
- every other ESLint package → follow the generic ESLint plugin workflow below (it has the same shape as the unicorn workflow)

Read both existing command files before starting. Their "Key facts" sections apply here too.

## Packages in scope

| Package | Plugin prefix in `nodeWithBiome.js` | Block header comment | Release notes |
| --- | --- | --- | --- |
| `@biomejs/biome` | (Biome configs `biome*.json`) | — | `https://raw.githubusercontent.com/biomejs/biome/main/CHANGELOG.md` |
| `eslint` | none (core rules) | `// Possible problems`, `// Suggestions`, `// Layout & Formatting` | `https://github.com/eslint/eslint/releases` |
| `@stylistic/eslint-plugin` | `@stylistic/` | `// @stylistic` | `https://github.com/eslint-stylistic/eslint-stylistic/releases` |
| `@typescript-eslint/eslint-plugin` (+ `@typescript-eslint/parser`) | `@typescript-eslint/` | TS block (`files: ["**/*.ts", "**/*.tsx"]`) | `https://github.com/typescript-eslint/typescript-eslint/releases` |
| `@eslint-react/eslint-plugin` | `react/` | `// @eslint-react/eslint-plugin` (both in the JS block and the TS block) | `https://github.com/Rel1cx/eslint-react/releases` |
| `eslint-plugin-import-x` | `importPlugin/` | `// eslint-plugin-import` | `https://github.com/un-ts/eslint-plugin-import-x/releases` |
| `eslint-plugin-jest` | `jest/` | `// eslint-plugin-jest` (test-files block, plus a small `*.spec.ts*`/`*.test.ts*` block at the end) | `https://github.com/jest-community/eslint-plugin-jest/releases` |
| `eslint-plugin-testing-library` | `testing-library/` | test-files block | `https://github.com/testing-library/eslint-plugin-testing-library/releases` |
| `eslint-plugin-unicorn` | `unicorn/` | `// eslint-plugin-unicorn` | see `update-unicorn.md` |

Ignore `eslint-import-resolver-typescript`, `typescript`, and the devDependencies. They carry no rules. Mention any major bump of them in the final summary all the same.

## Step 1: Find out which packages changed

1. The usual workflow is `npm run update`, which changes the pinned versions in `package.json`. Compare against the last commit first:

   ```bash
   git diff HEAD -- package.json
   ```

   If that shows no dependency changes (the update was already committed), compare against the last release tag instead:

   ```bash
   git diff "$(git describe --tags --abbrev=0)" -- package.json
   ```

   If neither shows changes, ask the user which old version to compare against.

2. Confirm that `node_modules` has the new versions installed, because every later step reads rule metadata from there:

   ```bash
   for p in @biomejs/biome eslint @stylistic/eslint-plugin @typescript-eslint/eslint-plugin @eslint-react/eslint-plugin eslint-plugin-import-x eslint-plugin-jest eslint-plugin-testing-library eslint-plugin-unicorn; do
     printf '%s ' "$p"; node -p "require('./node_modules/$p/package.json').version"
   done
   ```

   If an installed version doesn't match `package.json`, stop and ask the user to run `npm install` first.

3. Show the user a table: package, old version, new version, bump type (major/minor/patch). List every package that changed, including patch bumps. Plugins regularly add rules in minor releases, and Biome does so even in patch releases.

## Step 2: Mechanical rule-coverage check

Run the helper script. It loads `nodeWithBiome.js`, takes every plugin registered there plus ESLint core, and compares the exported rules with the configured ones:

```bash
node .claude/scripts/checkRuleCoverage.js
```

It reports per plugin:

- **missing**: exported, not deprecated, and not configured. Usually these are new rules.
- **unknown**: configured, but the plugin no longer exports them. Usually these are removed or renamed rules. These entries are broken config and must be fixed.
- **deprecated**: configured, but marked deprecated, with the replacement when the plugin provides one.

Notes on reading the output:

- Rule aliases (for example `react/x-globals` = `react/globals`) are already deduplicated.
- `@stylistic` is configured on purpose with only a few rules, because the Biome formatter handles formatting. Its "missing" list is therefore long and mostly intentional. Treat a `@stylistic` rule as new only if the release notes say it was added.
- Some other "missing" entries may also be deliberate omissions, i.e. they were never configured. The release notes tell you whether a rule is new. If a rule is unconfigured but **not** new, list it separately in the final summary as "pre-existing unconfigured". Don't add it unless the user asks.
- A deprecated rule that is configured as `"off"` is harmless. Propose removing it only if the plugin dropped it in this update. Never remove it just because it is deprecated.

Biome isn't covered by this script. Its rule diff comes from its changelog (see `update-biome.md`).

## Step 3: Collect the changes per package

For each changed package, fetch the release notes for **every** version between the old and the new one (major, minor and patch) and extract:

- **New rules**: name, one-sentence description, and any options that matter
- **Breaking changes**: renamed rules, removed rules, changed defaults or option names that affect a rule this project configures with options
- **Recommended-set changes**: only for information. This project configures rules explicitly and doesn't extend `recommended`.

Cross-check against the Step 2 output. Every **unknown** rule should be explained by a removal or rename. Every **missing** rule that is new should show up in the notes. Resolve any mismatch, e.g. by reading the plugin's `docs/rules/` in `node_modules`, before going on.

Start with Biome if it changed, and complete its workflow from `update-biome.md` first. New Biome rules can make ESLint rules redundant, including the new ESLint rules you are about to add, so the ESLint side must check against the up-to-date Biome configs.

## Step 4: Generic ESLint plugin workflow (all packages except Biome and unicorn)

For unicorn, follow `update-unicorn.md`. For all other ESLint packages:

1. **Breaking changes first:**
   - **Renamed rule**: replace the old key with the new name and keep its severity/options. Move it to the correct position (see step 4.4).
   - **Removed rule**: remove the entry. If there's a replacement (in core or another plugin), propose adding the replacement with the same severity.
   - **Changed options**: update the options so the rule behaves as before, and tell the user what changed.

2. **Biome-equivalent check for every new rule** (same technique as in `update-unicorn.md`):

   ```bash
   grep -i "<keyword>" node_modules/@biomejs/biome/configuration_schema.json | grep -v "Configuration\|Options\|RuleWith\|definitions" | head -20
   grep -n "// Biome:" nodeWithBiome.js
   ```

   Try several keywords from the rule's name and purpose.

3. **Severity**, in priority order:
   - **Biome covers the same case** → `"off"` with a `// Biome: <ruleName>` comment above it
   - **Pure formatting / layout** rule (most `@stylistic` rules) → don't add it. The Biome formatter handles formatting.
   - **Duplicates a rule this config already enables in another plugin** → `"off"` with a short comment naming that rule. The general preference order is unicorn over ESLint core, and `@typescript-eslint` extension rules over their core base rules in the TS block. Follow the existing pattern next to the rule.
   - **Requires type information** (`meta.docs.requiresTypeChecking`, or documented as such): `@typescript-eslint` rules can be enabled directly, because they only live in the TS block, which uses `projectService`. A `react/` rule that needs type info is set to `"off"` in the JS block with a `// Requires type information` comment above it, and enabled as `"error"` again in the TS block's `// @eslint-react/eslint-plugin` section. See `react/no-implicit-key` for the pattern.
   - **Niche or not applicable** (framework or language this config doesn't target, experimental syntax) → `"off"` with a brief comment
   - Otherwise → `"error"`

4. **Placement:** match the existing ordering convention of the target block. Don't assume alphabetical order everywhere:
   - The unicorn block is strictly alphabetical. The `@typescript-eslint`, jest and testing-library blocks are alphabetical, with a few deliberate exceptions (e.g. extension rules placed right after their core base rule being turned off). Insert alphabetically, and check the neighbours.
   - The `importPlugin/` block follows the plugin's documentation categories, not the alphabet.
   - The `react/` block is grouped by the plugin's rule categories (`// X Rules`, `// JSX Rules`, `// RSC Rules`, `// DOM Rules`, `// Web API Rules`, `// Naming Convention Rules`).
   - ESLint core rules are grouped under `// Possible problems`, `// Suggestions` and `// Layout & Formatting`, each alphabetical.

   Find the neighbour with:

   ```bash
   grep -n "\"<prefix>/<neighbor-rule>\"" nodeWithBiome.js
   ```

   Rules that apply only to TypeScript go in the TS block. Rules for test files go in the test-files block.

## Step 5: Confirm with the user

Present all proposed changes in batches, one batch per package (Biome first, then ESLint core, then the plugins). Within each batch, list the breaking-change fixes before the new rules. For each rule show the target file/block, the proposed severity/options, and the reason for any `"off"`. Include any ESLint rule that a new Biome rule would turn off.

Use the confirmation rules from `update-biome.md` for Biome. In particular, ask for the severity of every new `nursery` rule. Wait for confirmation before writing anything.

## Step 6: Apply and verify

1. Insert the confirmed changes (formatting: tabs, same style as the surrounding entries).
2. Re-run the coverage check. The "unknown" list must be empty, and every rule that was confirmed as new must no longer show up as "missing":

   ```bash
   node .claude/scripts/checkRuleCoverage.js
   ```

3. Check that both linters still load the config. Don't expect `npm run lint` to pass: the files in `test/` contain rule violations on purpose, so it always reports errors. What matters is that it reports no config errors (unknown rule, invalid options, failed plugin load). A "Definition for rule … was not found" message can also come from an `eslint-disable` comment in a `test/` fixture that names a renamed or removed rule. Fix those comments too:

   ```bash
   npx eslint --print-config test/eslint-core.ts > /dev/null
   npx eslint --print-config test/biome.tsx > /dev/null
   npm run lint 2>&1 | grep -E "Definition for rule|Configuration for rule|Could not find|Failed to load" || echo "no config errors"
   npx biome lint biome*.json biome.jsonc
   ```

4. If a newly enabled rule reports errors in this repo's real source files (`nodeWithBiome.js`, `eslint.config.js`, `.claude/scripts/`), show them to the user. Don't silently fix the code or turn the rule off.
5. End with a short summary: packages updated, rules added (with severity), rules renamed/removed, ESLint rules turned off in favour of Biome, and any pre-existing unconfigured rules noticed in Step 2.
