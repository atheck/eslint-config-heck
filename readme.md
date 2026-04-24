# eslint-config-heck

eslint-config-heck contains ESLint and Biome configurations for ES2015+, TypeScript, and React.

**Both ESLint and Biome are required.** Biome handles formatting, import/export sorting, and a large set of linting rules. ESLint covers rules that Biome does not yet support. Using one without the other will leave significant gaps in your linting coverage.

## Installation

~~~sh
npm install --save-dev eslint@9 @biomejs/biome eslint-config-heck
~~~

## ESLint Setup

Create an `eslint.config.js` and import the `nodeWithBiome` configuration. This configuration only enables rules that Biome does not yet support, so it is intended to be used alongside Biome.

~~~js
import nodeWithBiome from "eslint-config-heck/nodeWithBiome";

export default [
    ...nodeWithBiome,
];
~~~

## Biome Setup

Create a `biome.jsonc` and extend the configurations you need:

~~~json
{
    "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
    "extends": [
        "eslint-config-heck/biomeJsTs",
        "eslint-config-heck/biomeReactNative",
        "eslint-config-heck/biomeCss",
        "eslint-config-heck/biomeJson",
        "eslint-config-heck/biomePlaywright",
        "eslint-config-heck/biomeComplexity"
    ]
}
~~~

### Available Biome Configurations

| Configuration | Purpose |
| --- | --- |
| `biomeJsTs` | JavaScript and TypeScript rules, formatting, and import/export sorting |
| `biomeReactNative` | React Native specific rules |
| `biomeCss` | CSS specific rules |
| `biomeJson` | JSON specific rules |
| `biomePlaywright` | Playwright test rules |
| `biomeComplexity` | Complexity rules |
