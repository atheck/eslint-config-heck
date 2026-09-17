# Update Biome

You are helping migrate `@biomejs/biome` to a new version in this project. Unlike the unicorn update, this is a two-way sync: Biome's own rule configs need new/changed rules, AND the ESLint config (`nodeWithBiome.js`) needs re-checking, since a new Biome rule can make an existing ESLint rule redundant.

## Key facts about this project

- Biome config is split across several files (all `root: false`, all extended from `biome.jsonc`):
  - `biomeJsTs.json` — general JS/TS/JSX rules (a11y, complexity, correctness, nursery, security, style, suspicious)
  - `biomeComplexity.json` — opinionated complexity rules with options, overridden off in test files
  - `biomeCss.json` — CSS-only rules
  - `biomeJson.json` — JSON-only rules
  - `biomePlaywright.json` — Playwright-specific rules (all currently under `nursery`, named `noPlaywright*`/`usePlaywright*`)
  - `biomeReactNative.json` — React Native-specific rules (all currently under `nursery`, named `noReactNative*`/`useReactNative*`)
- Within each file, rules are grouped by Biome category (`a11y`, `complexity`, `correctness`, `nursery`, `performance`, `security`, `style`, `suspicious`) and sorted alphabetically within each group.
- Biome schema for rule names/groups/options: `node_modules/@biomejs/biome/configuration_schema.json`
- ESLint config: `nodeWithBiome.js` (flat config, multiple plugins: eslint core, `@stylistic`, `@typescript-eslint`, `eslint-plugin-import-x`, `eslint-plugin-unicorn`, `eslint-plugin-jest`, `eslint-plugin-testing-library`, `@eslint-react/eslint-plugin`). Rules already superseded by Biome are set to `"off"` with a `// Biome: <ruleName>` comment above them. Existing comments are the live source of truth for what's already handled — `grep -n "// Biome:" nodeWithBiome.js` before assuming anything is unhandled.

## What this task involves

1. Determine the currently installed version and confirm the new one:

   ```bash
   cat node_modules/@biomejs/biome/package.json | grep '"version"'
   ```

2. Fetch the changelog covering every release between the old and new version — **including patch releases**, since Biome regularly adds new `nursery` rules and breaking changes outside of major/minor bumps:

   `https://raw.githubusercontent.com/biomejs/biome/main/CHANGELOG.md`

   For each version section between the old and new version, extract:
   - **New rules** (name, group, one-sentence description of what it does, and any config options it supports)
   - **Breaking changes**: renamed rules, removed rules, and rules **promoted out of `nursery`** into a stable group (same name, new group)

3. Handle breaking changes first (before adding new rules). For each, locate the rule across all `biome*.json` files with `grep -rn "<ruleName>" biome*.json`:
   - **Renamed rule**: rename the key in place in whichever `biome*.json` file has it, keeping its existing severity/options, and re-sort if the alphabetical position changed. If a `// Biome: <oldName>` comment exists in `nodeWithBiome.js`, update it to the new name.
   - **Removed rule**: remove the entry from its `biome*.json` file. If a `// Biome: <ruleName>` comment references it in `nodeWithBiome.js`, that ESLint rule has lost its Biome coverage — flag it and propose turning it back to `"error"` (removing the comment), rather than leaving it silently off.
   - **Promoted from `nursery` to a stable group**: move the entry from the file's `nursery` block to the new group's block (create the group block if it doesn't exist yet), preserving severity/options, alphabetically positioned in the new group. No comment change needed in `nodeWithBiome.js` since the rule name is unchanged.

4. For all new rules, figure out where they belong:
   - **Target file**: rules named `noPlaywright*`/`usePlaywright*` → `biomePlaywright.json`; `noReactNative*`/`useReactNative*` → `biomeReactNative.json`. Otherwise, check the rule's documented language scope on the Biome docs/schema — CSS-only → `biomeCss.json`, JSON-only → `biomeJson.json`, otherwise → `biomeJsTs.json`. If the scope is unclear, present your best guess for confirmation rather than inserting blind.
   - **Severity**:
     - If the rule lands in `nursery` → always ask the user for the severity (`"warn"` / `"error"` / `"off"`) per rule; don't assume a default, since nursery rules are experimental and this project has been picking case-by-case (`warn` for e.g. `noExcessiveNestedCallbacks`, but not universally).
     - If the rule lands in a stable group → default to `"error"` (matches the overwhelming majority of already-enabled stable-group rules in this repo), unless it's opinionated/needs tuning (like `noExcessiveLinesPerFunction`, `useMaxParams`) — those go in the confirmation batch with a proposed option value instead of assuming one.
   - **ESLint overlap check**: for every new rule (nursery or stable), search `nodeWithBiome.js` across *all* plugins (not just unicorn) for a rule that covers the same case — same technique as the unicorn skill: grep for keywords from the rule's name/description. If a match is found, propose turning that ESLint rule `"off"` with a new `// Biome: <ruleName>` comment.

5. Present everything to the user in themed batches, grouped by Biome category (`a11y`, `complexity`, `correctness`, `nursery`, `performance`, `security`, `style`, `suspicious`), showing for each rule: target file, proposed severity/options, and any ESLint rule it would turn off and why. Wait for confirmation before writing anything — including breaking-change moves from step 3, since a promoted/renamed rule can shift severity conventions too.

6. Insert confirmed changes:
   - Into the correct `biome*.json` file, in strict alphabetical order within its group block, matching that file's existing formatting (tab indentation, trailing structure).
   - Into `nodeWithBiome.js`, turning off superseded ESLint rules in strict alphabetical order within their existing block, same insertion approach as `update-unicorn.md` step 7:

     ```bash
     grep -n "<plugin>/<neighbor-rule>" nodeWithBiome.js
     ```
