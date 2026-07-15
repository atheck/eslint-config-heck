# Update eslint-plugin-unicorn

You are helping migrate `eslint-plugin-unicorn` to a new major version in this project.

## What this task involves

1. Determine the currently configured unicorn version range and the newly installed version:

   ```bash
   cat node_modules/eslint-plugin-unicorn/package.json | grep '"version"'
   ```

2. Fetch the GitHub release notes for every new major version since the last one:
   `https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/vXX.0.0`

   For each release, extract:
   - **New rules** (name + one-sentence description of what it does)
   - **Breaking changes**: renamed rules, removed rules, rules moved out of `recommended`

3. Handle breaking changes first (before adding new rules):
   - **Renamed rule**: Remove the old name from `nodeWithBiome.js`, add the new name at the correct alphabetical position with the same severity.
   - **Removed rule**: Remove its entry from `nodeWithBiome.js`.
   - **Moved out of recommended**: Keep it in the config if already present; no action needed.

4. For all new rules, check for Biome equivalents:

   ```bash
   grep -i "<keyword>" node_modules/@biomejs/biome/configuration_schema.json | grep -v "Configuration\|Options\|RuleWith\|definitions" | head -20
   ```

   Use descriptive keywords from the rule name and purpose. Check multiple keywords if uncertain.

5. Assign severities using these rules (in priority order):
   - If **Biome covers the same case** → `"off"` (add a `// Biome: <ruleName>` comment)
   - If an **ESLint core rule covers the same case** → `"error"` (unicorn version is preferred over ESLint core)
   - If the rule is **niche/very domain-specific** (canvas-only, stage 3 proposal not widely available, non-JavaScript rule, etc.) → `"off"` with a brief comment
   - Otherwise → `"error"`

6. Present the rules to the user in themed batches (grouped by prefix: `no-*`, `prefer-*`, etc.) with the proposed severity and rationale for any `"off"` assignments. Wait for confirmation before inserting.

7. Insert confirmed rules into `nodeWithBiome.js` in **strict alphabetical order** within the unicorn rules block. The unicorn rules are sorted alphabetically by rule name. To find the right insertion point:

   ```bash
   grep -n "unicorn/prefer-<neighbor>" nodeWithBiome.js
   ```

## Key facts about this project

- Config file: `nodeWithBiome.js` (ESLint flat config format)
- Biome schema for equivalents check: `node_modules/@biomejs/biome/configuration_schema.json`
- Unicorn rules block is sorted alphabetically within each logical group
- The project uses Biome as a parallel linter; rules covered by Biome must be set to `"off"` to avoid duplication

## Past Biome equivalents (already handled — do not re-disable)

| Unicorn rule | Biome rule |
|---|---|
| `no-incorrect-template-string-interpolation` | `noTemplateCurlyInString` |
| `no-useless-boolean-cast` | `noExtraBooleanCast` |
| `no-useless-concat` | `noUselessStringConcat` |
| `no-useless-continue` | `noUselessContinue` |
| `no-useless-else` | `noUselessElse` |
| `no-useless-template-literals` | `noUnusedTemplateLiteral` |
| `operator-assignment` | `useShorthandAssign` |
| `prefer-array-flat-map` | `useFlatMap` |
| `prefer-array-slice` | `noSubstr` |
| `prefer-else-if` | `useCollapsedElseIf` |
| `prefer-global-number-constants` | `useNumberNamespace` |
