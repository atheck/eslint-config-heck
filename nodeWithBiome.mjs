import stylistic from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unicorn from "eslint-plugin-unicorn";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";

// biome-ignore lint/style/noDefaultExport: Required for ESLint
export default [
	{
		plugins: {
			"@stylistic": stylistic,
			react,
			"react-hooks": reactHooks,
			unicorn,
			import: importPlugin,
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			globals: {
				...globals.node,
			},
			ecmaVersion: "latest",
			sourceType: "commonjs",
			parserOptions: {
				ecmaFeatures: {
					globalReturn: false,
					impliedStrict: false,
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			// Possible problems
			"array-callback-return": [
				"error",
				{
					allowImplicit: true,
					checkForEach: false,
				},
			],
			"constructor-super": "off",
			"for-direction": "off",
			"getter-return": "off",
			"no-async-promise-executor": "off",
			"no-await-in-loop": "warn",
			"no-class-assign": "off",
			"no-compare-neg-zero": "off",
			"no-cond-assign": "off",
			"no-const-assign": "off",
			"no-constant-binary-expression": "error",
			"no-constant-condition": "off",
			"no-constructor-return": "off",
			"no-control-regex": "off",
			"no-debugger": "off",
			"no-dupe-args": "off",
			"no-dupe-class-members": "off",
			"no-dupe-else-if": "off",
			"no-dupe-keys": "off",
			"no-duplicate-case": "off",
			"no-duplicate-imports": "off",
			"no-empty-character-class": "off",
			"no-empty-pattern": "off",
			"no-ex-assign": "off",
			"no-fallthrough": "off",
			"no-func-assign": "off",
			"no-import-assign": "off",
			"no-inner-declarations": "off",
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "off",
			"no-loss-of-precision": "off",
			"no-misleading-character-class": "off",
			"no-new-native-nonconstructor": "off",
			"no-new-symbol": "off",
			"no-obj-calls": "off",
			"no-promise-executor-return": "error",
			"no-prototype-builtins": "off",
			"no-self-assign": "off",
			"no-self-compare": "off",
			"no-setter-return": "off",
			"no-sparse-arrays": "off",
			"no-template-curly-in-string": "off",
			"no-this-before-super": "off",
			"no-undef": "off",
			"no-unexpected-multiline": "error",
			"no-unmodified-loop-condition": "error",
			"no-unreachable": "off",
			"no-unreachable-loop": "error",
			"no-unsafe-finally": "off",
			"no-unsafe-negation": "off",
			"no-unsafe-optional-chaining": "off",
			"no-unused-private-class-members": "off",
			"no-unused-vars": "off",
			"no-use-before-define": ["error", "nofunc"],
			"no-useless-backreference": "error",
			"require-atomic-updates": "error",
			"use-isnan": "off",
			"valid-typeof": "off",

			// Suggestions
			"accessor-pairs": [
				"error",
				{
					getWithoutSet: false,
					setWithoutGet: true,
					enforceForClassMembers: true,
				},
			],
			"arrow-body-style": ["error", "as-needed"],
			"block-scoped-var": "error",
			camelcase: "off",
			"capitalized-comments": "off",
			"class-methods-use-this": "error",
			complexity: "off",
			"consistent-return": "error",
			"consistent-this": ["error", "that"],
			curly: "off",
			"default-case": "off",
			"default-case-last": "off",
			"default-param-last": "off",
			"dot-notation": "off",
			eqeqeq: "off",
			"func-name-matching": "off",
			"func-names": "off",
			"func-style": [
				"error",
				"declaration",
				{
					allowArrowFunctions: true,
				},
			],
			"grouped-accessor-pairs": ["error", "getBeforeSet"],
			"guard-for-in": "off",
			"id-denylist": "off",
			"id-length": [
				"error",
				{
					exceptions: ["_", "i", "j", "x", "y", "z"],
				},
			],
			"id-match": "off",
			"init-declarations": "off",
			"logical-assignment-operators": "error",
			"max-classes-per-file": "off",
			"max-depth": "off",
			"max-lines": "off",
			"max-lines-per-function": "off",
			"max-nested-callbacks": "off",
			"max-params": "off",
			"max-statements": "off",
			"multiline-comment-style": "off",
			"new-cap": "error",
			"no-alert": "error",
			"no-array-constructor": "off",
			"no-bitwise": [
				"error",
				{
					allow: [],
					int32Hint: false,
				},
			],
			"no-caller": "error",
			"no-case-declarations": "off",
			"no-console": "off",
			"no-continue": "off",
			"no-delete-var": "off",
			"no-div-regex": "off",
			"no-else-return": "off",
			"no-empty": "off",
			"no-empty-function": "off",
			"no-empty-static-block": "off",
			"no-eq-null": "off",
			"no-eval": "off",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-boolean-cast": "off",
			"no-extra-label": "off",
			"no-global-assign": "off",
			"no-implicit-coercion": "error",
			"no-implicit-globals": "off",
			"no-implied-eval": "error",
			"no-inline-comments": "error",
			"no-invalid-this": "error",
			"no-iterator": "error",
			"no-label-var": "off",
			"no-labels": "error",
			"no-lone-blocks": "off",
			"no-lonely-if": "off",
			"no-loop-func": "error",
			"no-magic-numbers": "off",
			"no-multi-assign": "error",
			"no-multi-str": "error",
			"no-negated-condition": "off",
			"no-nested-ternary": "off",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "off",
			"no-nonoctal-decimal-escape": "off",
			"no-object-constructor": "error",
			"no-octal": "off",
			"no-octal-escape": "off",
			"no-param-reassign": "off",
			"no-plusplus": "off",
			"no-proto": "error",
			"no-redeclare": "off",
			"no-regex-spaces": "off",
			"no-restricted-exports": "off",
			"no-restricted-globals": "off",
			"no-restricted-imports": "off",
			"no-restricted-properties": "off",
			"no-restricted-syntax": "off",
			"no-return-assign": "off",
			"no-script-url": "error",
			"no-sequences": "off",
			"no-shadow": "error",
			"no-shadow-restricted-names": "off",
			"no-ternary": "off",
			"no-throw-literal": "off",
			"no-undef-init": "off",
			"no-undefined": "off",
			"no-underscore-dangle": [
				"error",
				{
					enforceInMethodNames: true,
				},
			],
			"no-unneeded-ternary": "off",
			"no-unused-expressions": "error",
			"no-unused-labels": "off",
			"no-useless-call": "error",
			"no-useless-catch": "off",
			"no-useless-computed-key": [
				"error",
				{
					enforceForClassMembers: true,
				},
			],
			"no-useless-concat": "off",
			"no-useless-constructor": "off",
			"no-useless-escape": "off",
			"no-useless-rename": "off",
			"no-useless-return": "error",
			"no-var": "off",
			"no-void": "off",
			"no-warning-comments": "warn",
			"no-with": "off",
			"object-shorthand": [
				"error",
				"always",
				{
					avoidExplicitReturnArrows: true,
				},
			],
			"one-var": "off",
			"operator-assignment": "off",
			"prefer-arrow-callback": "off",
			"prefer-const": "off",
			"prefer-destructuring": [
				"error",
				{
					VariableDeclarator: {
						array: false,
						object: true,
					},
					AssignmentExpression: {
						array: false,
						object: false,
					},
				},
			],
			"prefer-exponentiation-operator": "off",
			"prefer-named-capture-group": "error",
			"prefer-numeric-literals": "off",
			"prefer-object-has-own": "error",
			"prefer-object-spread": "error",
			"prefer-promise-reject-errors": "error",
			"prefer-regex-literals": "error",
			"prefer-rest-params": "off",
			"prefer-spread": "error",
			"prefer-template": "off",
			radix: ["error", "always"],
			"require-await": "off",
			"require-unicode-regexp": "error",
			"require-yield": "off",
			"sort-imports": "off",
			"sort-keys": "off",
			"sort-vars": "off",
			strict: ["error", "global"],
			"symbol-description": "error",
			"vars-on-top": "error",
			yoda: "off",

			// Layout & Formatting
			"line-comment-position": "off",
			"unicode-bom": "error",

			// @stylistic
			"@stylistic/max-statements-per-line": "error",
			"@stylistic/multiline-comment-style": ["error", "separate-lines"],
			"@stylistic/no-floating-decimal": "error",
			"@stylistic/padding-line-between-statements": [
				"error",
				// return
				{
					blankLine: "always",
					prev: "*",
					next: "return",
				},
				// const, let, var
				{
					blankLine: "always",
					prev: ["const", "let", "var"],
					next: "*",
				},
				{
					blankLine: "always",
					prev: "*",
					next: ["const", "let", "var"],
				},
				{
					blankLine: "any",
					prev: ["const", "let", "var"],
					next: ["const", "let", "var"],
				},
				// import
				{
					blankLine: "always",
					prev: ["import", "cjs-import"],
					next: "*",
				},
				{
					blankLine: "never",
					prev: ["import", "cjs-import"],
					next: ["import", "cjs-import"],
				},
				// export
				{
					blankLine: "always",
					prev: "*",
					next: ["export", "cjs-export"],
				},
				{
					blankLine: "any",
					prev: ["export", "cjs-export"],
					next: ["export", "cjs-export"],
				},
				// function
				{
					blankLine: "always",
					prev: "*",
					next: "function",
				},
			],
			"@stylistic/quote-props": ["error", "as-needed"],
			"@stylistic/spaced-comment": ["error", "always"],

			// eslint-plugin-react
			"react/boolean-prop-naming": "off",
			"react/button-has-type": "off",
			"react/checked-requires-onchange-or-readonly": "error",
			"react/default-props-match-prop-types": "off",
			"react/destructuring-assignment": [
				"error",
				"always",
				{
					destructureInSignature: "always",
				},
			],
			"react/display-name": "off",
			"react/forbid-component-props": "off",
			"react/forbid-dom-props": "off",
			"react/forbid-elements": "off",
			"react/forbid-foreign-prop-types": "off",
			"react/forbid-prop-types": "off",
			"react/forward-ref-uses-ref": "error",
			"react/function-component-definition": [
				"error",
				{
					namedComponents: "function-declaration",
					unnamedComponents: "arrow-function",
				},
			],
			"react/hook-use-state": [
				"error",
				{
					allowDestructuredState: true,
				},
			],
			"react/iframe-missing-sandbox": "error",
			"react/jsx-boolean-value": "off",
			"react/jsx-child-element-spacing": "error",
			"react/jsx-closing-bracket-location": "off",
			"react/jsx-closing-tag-location": "off",
			"react/jsx-curly-brace-presence": ["error", "always"],
			"react/jsx-curly-spacing": "off",
			"react/jsx-equals-spacing": "off",
			"react/jsx-filename-extension": [
				"error",
				{
					extensions: [".jsx", ".tsx"],
				},
			],
			"react/jsx-first-prop-new-line": "off",
			"react/jsx-fragments": "off",
			"react/jsx-handler-names": "error",
			"react/jsx-key": "off",
			"react/jsx-max-depth": "off",
			"react/jsx-newline": "off",
			"react/jsx-no-bind": [
				"error",
				{
					allowArrowFunctions: true,
				},
			],
			"react/jsx-no-comment-textnodes": "off",
			"react/jsx-no-constructed-context-values": "error",
			"react/jsx-no-duplicate-props": "off",
			"react/jsx-no-leaked-render": "error",
			"react/jsx-no-literals": "off",
			"react/jsx-no-script-url": "error",
			"react/jsx-no-target-blank": "off",
			"react/jsx-no-undef": [
				"error",
				{
					allowGlobals: false,
				},
			],
			"react/jsx-no-useless-fragment": "off",
			"react/jsx-pascal-case": "error",
			"react/jsx-props-no-spread-multi": "error",
			"react/jsx-props-no-spreading": "off",
			"react/jsx-sort-props": "off",
			"react/jsx-tag-spacing": "off",
			"react/jsx-uses-react": "off",
			"react/jsx-uses-vars": "error",
			"react/jsx-wrap-multilines": "off",
			"react/no-access-state-in-setstate": "error",
			"react/no-adjacent-inline-elements": "error",
			"react/no-array-index-key": "off",
			"react/no-arrow-function-lifecycle": "error",
			"react/no-children-prop": "off",
			"react/no-danger": "error",
			"react/no-danger-with-children": "off",
			"react/no-deprecated": "warn",
			"react/no-did-mount-set-state": "error",
			"react/no-did-update-set-state": "error",
			"react/no-direct-mutation-state": "error",
			"react/no-find-dom-node": "error",
			"react/no-invalid-html-attribute": "error",
			"react/no-is-mounted": "error",
			"react/no-multi-comp": "off",
			"react/no-namespace": "error",
			"react/no-object-type-as-default-prop": "error",
			"react/no-redundant-should-component-update": "error",
			"react/no-render-return-value": "off",
			"react/no-set-state": "off",
			"react/no-string-refs": [
				"error",
				{
					noTemplateLiterals: true,
				},
			],
			"react/no-this-in-sfc": "error",
			"react/no-typos": "error",
			"react/no-unescaped-entities": "error",
			"react/no-unknown-property": "error",
			"react/no-unsafe": "error",
			"react/no-unstable-nested-components": "error",
			"react/no-unused-class-component-methods": "error",
			"react/no-unused-prop-types": "error",
			"react/no-unused-state": "error",
			"react/no-will-update-set-state": "error",
			"react/prefer-es6-class": ["error", "always"],
			"react/prefer-exact-props": "off",
			"react/prefer-read-only-props": "off",
			"react/prefer-stateless-function": "error",
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"react/require-default-props": "off",
			"react/require-optimization": "off",
			"react/require-render-return": "error",
			"react/self-closing-comp": "off",
			"react/sort-comp": [
				"error",
				{
					order: [
						"static-variables",
						"instance-variables",
						"static-methods",
						"lifecycle",
						"render",
						"everything-else",
					],
					groups: {
						render: ["render", "/^render.+$/"],
					},
				},
			],
			"react/sort-default-props": "off",
			"react/sort-prop-types": [
				"error",
				{
					callbacksLast: true,
					ignoreCase: true,
					requiredFirst: true,
					sortShapeProp: true,
					noSortAlphabetically: true,
				},
			],
			"react/state-in-constructor": "error",
			"react/static-property-placement": "off",
			"react/style-prop-object": "error",
			"react/void-dom-elements-no-children": "off",

			// eslint-plugin-react-hooks
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",

			// eslint-plugin-unicorn
			"unicorn/better-regex": "error",
			"unicorn/catch-error-name": [
				"error",
				{
					name: "ex",
					ignore: ["^ex([A-Z0-9].*)?$"],
				},
			],
			"unicorn/consistent-destructuring": "error",
			"unicorn/consistent-empty-array-spread": "error",
			"unicorn/consistent-existence-index-check": "error",
			"unicorn/consistent-function-scoping": [
				"error",
				{
					checkArrowFunctions: false,
				},
			],
			"unicorn/custom-error-definition": "off",
			"unicorn/empty-brace-spaces": "off",
			"unicorn/error-message": "off",
			"unicorn/escape-case": "error",
			"unicorn/expiring-todo-comments": "error",
			"unicorn/explicit-length-check": "off",
			"unicorn/filename-case": "off",
			"unicorn/import-style": "error",
			"unicorn/new-for-builtins": "off",
			"unicorn/no-abusive-eslint-disable": "error",
			"unicorn/no-anonymous-default-export": "error",
			"unicorn/no-array-callback-reference": "off",
			"unicorn/no-array-for-each": "off",
			"unicorn/no-array-method-this-argument": "error",
			"unicorn/no-array-push-push": "error",
			"unicorn/no-array-reduce": "off",
			"unicorn/no-await-expression-member": "error",
			"unicorn/no-await-in-promise-methods": "error",
			"unicorn/no-console-spaces": "error",
			"unicorn/no-document-cookie": "off",
			"unicorn/no-empty-file": "error",
			"unicorn/no-for-loop": "error",
			"unicorn/no-hex-escape": "error",
			"unicorn/no-instanceof-array": "off",
			"unicorn/no-invalid-fetch-options": "error",
			"unicorn/no-invalid-remove-event-listener": "error",
			"unicorn/no-keyword-prefix": "off",
			"unicorn/no-length-as-slice-end": "error",
			"unicorn/no-lonely-if": "off",
			"unicorn/no-magic-array-flat-depth": "error",
			"unicorn/no-negated-condition": "off",
			"unicorn/no-negation-in-equality-check": "error",
			"unicorn/no-nested-ternary": "off",
			"unicorn/no-new-array": "error",
			"unicorn/no-new-buffer": "error",
			"unicorn/no-null": "off",
			"unicorn/no-object-as-default-parameter": "error",
			"unicorn/no-process-exit": "error",
			"unicorn/no-single-promise-in-promise-methods": "error",
			"unicorn/no-static-only-class": "off",
			"unicorn/no-thenable": "off",
			"unicorn/no-this-assignment": "error",
			"unicorn/no-unnecessary-await": "error",
			"unicorn/no-unreadable-array-destructuring": "error",
			"unicorn/no-unreadable-iife": "error",
			"unicorn/no-unused-properties": "error",
			"unicorn/no-useless-fallback-in-spread": "error",
			"unicorn/no-useless-length-check": "error",
			"unicorn/no-useless-promise-resolve-reject": "error",
			"unicorn/no-useless-spread": "error",
			"unicorn/no-useless-switch-case": "off",
			"unicorn/no-useless-undefined": "error",
			"unicorn/no-typeof-undefined": "error",
			"unicorn/no-zero-fractions": "error",
			"unicorn/numeric-separators-style": "error",
			"unicorn/prefer-add-event-listener": "error",
			"unicorn/prefer-array-find": "error",
			"unicorn/prefer-array-flat": "error",
			"unicorn/prefer-array-flat-map": "off",
			"unicorn/prefer-array-index-of": "error",
			"unicorn/prefer-array-some": "error",
			"unicorn/prefer-at": "off",
			"unicorn/prefer-blob-reading-methods": "error",
			"unicorn/prefer-code-point": "error",
			"unicorn/prefer-date-now": "off",
			"unicorn/prefer-default-parameters": "error",
			"unicorn/prefer-dom-node-append": "error",
			"unicorn/prefer-dom-node-dataset": "error",
			"unicorn/prefer-dom-node-remove": "error",
			"unicorn/prefer-dom-node-text-content": "error",
			"unicorn/prefer-event-target": "off",
			"unicorn/prefer-export-from": "off",
			"unicorn/prefer-global-this": "off",
			"unicorn/prefer-includes": "error",
			"unicorn/prefer-json-parse-buffer": "error",
			"unicorn/prefer-keyboard-event-key": "error",
			"unicorn/prefer-logical-operator-over-ternary": "error",
			"unicorn/prefer-math-min-max": "error",
			"unicorn/prefer-math-trunc": "error",
			"unicorn/prefer-modern-dom-apis": "error",
			"unicorn/prefer-modern-math-apis": "error",
			"unicorn/prefer-module": "off",
			"unicorn/prefer-native-coercion-functions": "error",
			"unicorn/prefer-negative-index": "error",
			"unicorn/prefer-node-protocol": "off",
			"unicorn/prefer-number-properties": "off",
			"unicorn/prefer-object-from-entries": "error",
			"unicorn/prefer-optional-catch-binding": "error",
			"unicorn/prefer-prototype-methods": "off",
			"unicorn/prefer-query-selector": "off",
			"unicorn/prefer-reflect-apply": "error",
			"unicorn/prefer-regexp-test": "error",
			"unicorn/prefer-set-has": "error",
			"unicorn/prefer-set-size": "error",
			"unicorn/prefer-spread": "error",
			"unicorn/prefer-string-raw": "error",
			"unicorn/prefer-string-replace-all": "error",
			"unicorn/prefer-string-slice": "off",
			"unicorn/prefer-string-starts-ends-with": "error",
			"unicorn/prefer-string-trim-start-end": "off",
			"unicorn/prefer-structured-clone": "error",
			"unicorn/prefer-switch": "error",

			// TODO: off until there is a solution to this: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1079
			"unicorn/prefer-ternary": "off",
			"unicorn/prefer-top-level-await": "off",
			"unicorn/prefer-type-error": "error",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/relative-url-style": "error",
			"unicorn/require-array-join-separator": "error",
			"unicorn/require-number-to-fixed-digits-argument": "off",
			"unicorn/require-post-message-target-origin": "error",
			"unicorn/string-content": "off",
			"unicorn/switch-case-braces": "off",
			"unicorn/template-indent": "off",
			"unicorn/text-encoding-identifier-case": "error",
			"unicorn/throw-new-error": "off",

			// eslint-plugin-import
			"import/export": "off",
			"import/no-deprecated": "off",
			"import/no-empty-named-blocks": "error",
			"import/no-extraneous-dependencies": "off",
			"import/no-mutable-exports": "error",
			"import/no-named-as-default": "error",
			"import/no-named-as-default-member": "off",
			"import/no-unused-modules": "off",
			"import/no-amd": "off",
			"import/no-commonjs": "off",
			"import/no-import-module-exports": "off",
			"import/no-nodejs-modules": "off",
			"import/unambiguous": "off",
			"import/default": "off",
			"import/named": "off",
			"import/namespace": "off",
			"import/no-absolute-path": "error",
			"import/no-cycle": [
				"error",
				{
					ignoreExternal: true,
				},
			],
			"import/no-dynamic-require": "off",
			"import/no-internal-modules": "off",
			"import/no-relative-packages": "off",
			"import/no-relative-parent-imports": "off",
			"import/no-restricted-paths": "off",
			"import/no-self-import": "error",
			"import/no-unresolved": "off",
			"import/no-useless-path-segments": [
				"error",
				{
					noUselessIndex: true,
				},
			],
			"import/no-webpack-loader-syntax": "error",
			"import/consistent-type-specifier-style": "off",
			"import/dynamic-import-chunkname": "off",
			"import/exports-last": "error",
			"import/extensions": "off",
			"import/first": "error",
			"import/group-exports": "error",
			"import/max-dependencies": "off",
			"import/newline-after-import": "off",
			"import/no-anonymous-default-export": "error",
			"import/no-default-export": "off",
			"import/no-duplicates": "error",
			"import/no-named-default": "off",
			"import/no-named-export": "off",
			"import/no-namespace": "off",
			"import/no-unassigned-import": "off",
			"import/order": "off",
			"import/prefer-default-export": "off",
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"@stylistic": stylistic,
			react,
			"react-hooks": reactHooks,
			unicorn,
			import: importPlugin,
			"@typescript-eslint": typescriptEslint,
		},
		languageOptions: {
			globals: {
				NodeJS: true,
			},
			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					globalReturn: false,
					impliedStrict: false,
					jsx: true,
				},

				project: "tsconfig.json",
			},
		},
		rules: {
			// Typescript
			"@typescript-eslint/adjacent-overload-signatures": "off",
			"@typescript-eslint/array-type": "off",
			"@typescript-eslint/await-thenable": "error",
			"@typescript-eslint/ban-ts-comment": [
				"error",
				{
					"ts-expect-error": true,
					"ts-ignore": true,
					"ts-nocheck": true,
					"ts-check": false,
				},
			],
			"@typescript-eslint/ban-tslint-comment": "error",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/class-literal-property-style": "error",
			"class-methods-use-this": "off",
			"@typescript-eslint/class-methods-use-this": "error",
			"@typescript-eslint/consistent-generic-constructors": "error",
			"@typescript-eslint/consistent-indexed-object-style": "error",
			"@typescript-eslint/consistent-type-assertions": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
			"@typescript-eslint/consistent-type-exports": "off",
			"@typescript-eslint/consistent-type-imports": "off",
			"default-param-last": "off",
			"@typescript-eslint/default-param-last": "off",
			"dot-notation": "off",
			"@typescript-eslint/dot-notation": "off",
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
					allowHigherOrderFunctions: true,
					allowDirectConstAssertionInArrowFunctions: true,
					allowConciseArrowFunctionExpressionsStartingWithVoid: false,
				},
			],
			"@typescript-eslint/explicit-member-accessibility": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"init-declarations": "off",
			"@typescript-eslint/init-declarations": "off",
			"@typescript-eslint/max-params": "off",
			"@typescript-eslint/member-ordering": "off",
			"@typescript-eslint/method-signature-style": "error",
			"@typescript-eslint/naming-convention": "off",
			"no-array-constructor": "off",
			"@typescript-eslint/no-array-constructor": "off",
			"@typescript-eslint/no-array-delete": "off",
			"@typescript-eslint/no-base-to-string": "error",
			"@typescript-eslint/no-confusing-non-null-assertion": "error",
			"@typescript-eslint/no-confusing-void-expression": "off",
			"@typescript-eslint/no-deprecated": "warn",
			"no-dupe-class-members": "off",
			"@typescript-eslint/no-dupe-class-members": "off",
			"@typescript-eslint/no-duplicate-enum-values": "error",
			"@typescript-eslint/no-duplicate-type-constituents": "error",
			"@typescript-eslint/no-dynamic-delete": "error",
			"no-empty-function": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-empty-interface": "off",
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-extra-non-null-assertion": "off",
			"@typescript-eslint/no-extraneous-class": "error",
			"@typescript-eslint/no-floating-promises": [
				"error",
				{
					ignoreVoid: false,
				},
			],
			"@typescript-eslint/no-for-in-array": "error",
			"no-implied-eval": "off",
			"@typescript-eslint/no-implied-eval": "error",
			"@typescript-eslint/no-import-type-side-effects": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"no-invalid-this": "off",
			"@typescript-eslint/no-invalid-this": "error",
			"@typescript-eslint/no-invalid-void-type": "off",
			"no-loop-func": "off",
			"@typescript-eslint/no-loop-func": "error",
			"no-magic-numbers": "off",
			"@typescript-eslint/no-magic-numbers": "off",
			"@typescript-eslint/no-meaningless-void-operator": "off",
			"@typescript-eslint/no-misused-new": "off",
			"@typescript-eslint/no-misused-promises": "error",
			"@typescript-eslint/no-mixed-enums": "off",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
			"@typescript-eslint/no-non-null-assertion": "off",
			"no-redeclare": "off",
			"@typescript-eslint/no-redeclare": "off",
			"@typescript-eslint/no-redundant-type-constituents": "error",
			"@typescript-eslint/no-require-imports": "off",
			"no-restricted-imports": "off",
			"@typescript-eslint/no-restricted-imports": "off",
			"@typescript-eslint/no-restricted-types": "off",
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": "error",
			"@typescript-eslint/no-this-alias": "off",
			"@typescript-eslint/no-type-alias": "off",
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
			"@typescript-eslint/no-unnecessary-condition": [
				"error",
				{
					checkTypePredicates: true,
				},
			],
			"@typescript-eslint/no-unnecessary-parameter-property-assignment":
				"error",
			"@typescript-eslint/no-unnecessary-qualifier": "error",
			"@typescript-eslint/no-unnecessary-template-expression": "error",
			"@typescript-eslint/no-unnecessary-type-arguments": "error",
			"@typescript-eslint/no-unnecessary-type-assertion": "error",
			"@typescript-eslint/no-unnecessary-type-constraint": "off",
			"@typescript-eslint/no-unnecessary-type-parameters": "error",
			"@typescript-eslint/no-unsafe-argument": "error",
			"@typescript-eslint/no-unsafe-assignment": "error",
			"@typescript-eslint/no-unsafe-call": "error",
			"@typescript-eslint/no-unsafe-declaration-merging": "off",
			"@typescript-eslint/no-unsafe-enum-comparison": "error",
			"@typescript-eslint/no-unsafe-function-type": "off",
			"@typescript-eslint/no-unsafe-member-access": "error",
			"@typescript-eslint/no-unsafe-return": "error",
			"@typescript-eslint/no-unsafe-unary-minus": "error",
			"no-unused-expressions": "off",
			"@typescript-eslint/no-unused-expressions": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"no-use-before-define": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"no-useless-constructor": "off",
			"@typescript-eslint/no-useless-constructor": "off",
			"@typescript-eslint/no-useless-empty-export": "off",
			"@typescript-eslint/no-var-requires": "off",
			"@typescript-eslint/no-wrapper-object-types": "off",
			"@typescript-eslint/non-nullable-type-assertion-style": "off",
			"no-throw-literal": "off",
			"@typescript-eslint/only-throw-error": "off",
			"@typescript-eslint/parameter-properties": "off",
			"@typescript-eslint/prefer-as-const": "off",
			"prefer-destructuring": "off",
			"@typescript-eslint/prefer-destructuring": [
				"error",
				{
					VariableDeclarator: {
						array: false,
						object: true,
					},
					AssignmentExpression: {
						array: false,
						object: false,
					},
				},
			],
			"@typescript-eslint/prefer-enum-initializers": "off",
			// unicorns prefer-array-find is more powerful
			"@typescript-eslint/prefer-find": "off",
			"@typescript-eslint/prefer-for-of": "off",
			"@typescript-eslint/prefer-function-type": "off",
			"@typescript-eslint/prefer-includes": "error",
			"@typescript-eslint/prefer-literal-enum-member": "error",
			"@typescript-eslint/prefer-namespace-keyword": "off",
			"@typescript-eslint/prefer-nullish-coalescing": [
				"error",
				{
					ignoreMixedLogicalExpressions: true,
				},
			],
			"@typescript-eslint/prefer-optional-chain": "error",
			"prefer-promise-reject-errors": "off",
			"@typescript-eslint/prefer-promise-reject-errors": "error",
			"@typescript-eslint/prefer-readonly": [
				"error",
				{
					onlyInlineLambdas: true,
				},
			],
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
			"@typescript-eslint/prefer-reduce-type-parameter": "error",
			"@typescript-eslint/prefer-regexp-exec": "error",
			"@typescript-eslint/prefer-return-this-type": "error",
			"@typescript-eslint/prefer-string-starts-ends-with": "error",
			"@typescript-eslint/promise-function-async": "error",
			"@typescript-eslint/require-array-sort-compare": "error",
			"require-await": "off",
			"@typescript-eslint/require-await": "off",
			"@typescript-eslint/restrict-plus-operands": "error",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/return-await": "off",
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/switch-exhaustiveness-check": [
				"error",
				{
					allowDefaultCaseForExhaustiveSwitch: false,
					requireDefaultForNonUnion: true,
				},
			],
			"@typescript-eslint/triple-slash-reference": "error",
			"@typescript-eslint/typedef": "off",
			"@typescript-eslint/unbound-method": [
				"error",
				{
					ignoreStatic: true,
				},
			],
			"@typescript-eslint/unified-signatures": "error",
			"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",

			// Typescript handles itself
			"consistent-return": "off",
			"@typescript-eslint/consistent-return": "off",
			"constructor-super": "off",
			"getter-return": "off",
			"no-class-assign": "off",
			"no-const-assign": "off",
			"no-delete-var": "off",
			"no-dupe-args": "off",
			"no-dupe-keys": "off",
			"no-func-assign": "off",
			"no-import-assign": "off",
			"no-new-symbol": "off",
			"no-nonoctal-decimal-escape": "off",
			"no-obj-calls": "off",
			"no-octal-escape": "off",
			"no-setter-return": "off",
			"no-shadow-restricted-names": "off",
			"no-undef": "off",
			"no-undefined": "off",
			"no-unexpected-multiline": "off",
			"no-unsafe-negation": "off",
			"no-with": "off",
			"valid-typeof": "off",

			// React
			// If you are working in a typed-codebase which encourages you to always use boolean conditions, this rule can be disabled.
			"react/jsx-no-leaked-render": "off",
		},
	},
	{
		files: [
			"**/*.spec.ts",
			"**/*.spec.tsx",
			"**/*.test.ts",
			"**/*.test.tsx",
			"**/*.spec.js",
			"**/*.spec.jsx",
			"**/*.test.js",
			"**/*.test.jsx",
		],
		plugins: {
			jest,
			"testing-library": testingLibrary,
		},
		rules: {
			// eslint-plugin-jest
			"jest/consistent-test-it": "error",
			"jest/expect-expect": [
				"error",
				{
					assertFunctionNames: ["expect*"],
				},
			],
			"jest/max-expects": "off",
			"jest/max-nested-describe": "off",
			"jest/no-alias-methods": "error",
			"jest/no-commented-out-tests": "error",
			"jest/no-conditional-expect": "error",
			"jest/no-conditional-in-test": "error",
			"jest/no-confusing-set-timeout": "error",
			"jest/no-deprecated-functions": "warn",
			"jest/no-disabled-tests": "off",
			"jest/no-done-callback": "off",
			"jest/no-duplicate-hooks": "off",
			"jest/no-export": "off",
			"jest/no-focused-tests": "off",
			"jest/no-hooks": "off",
			"jest/no-identical-title": "error",
			"jest/no-interpolation-in-snapshots": "error",
			"jest/no-jasmine-globals": "error",
			"jest/no-large-snapshots": "off",
			"jest/no-mocks-import": "error",
			"jest/no-restricted-jest-methods": "off",
			"jest/no-restricted-matchers": "off",
			"jest/no-standalone-expect": "off",
			"jest/no-test-prefixes": "error",
			"jest/no-test-return-statement": "error",
			// This rule is only active if using typescript - see down below
			"jest/no-untyped-mock-factory": "off",
			"jest/padding-around-after-all-blocks": "off",
			"jest/padding-around-after-each-blocks": "off",
			"jest/padding-around-before-all-blocks": "off",
			"jest/padding-around-before-each-blocks": "off",
			"jest/padding-around-expect-groups": "off",
			"jest/padding-around-describe-blocks": "error",
			"jest/padding-around-test-blocks": "error",
			"jest/prefer-called-with": "error",
			"jest/prefer-comparison-matcher": "error",
			"jest/prefer-each": "error",
			"jest/prefer-equality-matcher": "error",
			"jest/prefer-expect-assertions": "off",
			"jest/prefer-expect-resolves": "error",
			"jest/prefer-hooks-in-order": "error",
			"jest/prefer-hooks-on-top": "error",
			"jest/prefer-importing-jest-globals": "off",
			"jest/prefer-jest-mocked": "error",
			"jest/prefer-lowercase-title": [
				"error",
				{
					ignore: ["describe"],
				},
			],
			"jest/prefer-mock-promise-shorthand": "error",
			"jest/prefer-snapshot-hint": "error",
			"jest/prefer-spy-on": "error",
			"jest/prefer-strict-equal": "error",
			"jest/prefer-to-be": "error",
			"jest/prefer-to-contain": "error",
			"jest/prefer-to-have-length": "error",
			"jest/prefer-todo": "warn",
			"jest/require-hook": "error",
			"jest/require-to-throw-message": "error",
			"jest/require-top-level-describe": "error",
			"jest/valid-describe-callback": "error",
			"jest/valid-expect": "error",
			"jest/valid-expect-in-promise": "error",
			"jest/valid-title": "error",
			"@typescript-eslint/unbound-method": "off",
			"jest/unbound-method": "error",

			// plugin-testing-library
			"testing-library/await-async-events": "error",
			"testing-library/await-async-queries": "error",
			"testing-library/await-async-utils": "error",
			"testing-library/consistent-data-testid": "off",
			"testing-library/no-await-sync-events": "off",
			"testing-library/no-await-sync-queries": "off",
			"testing-library/no-container": "error",
			"testing-library/no-debugging-utils": "error",
			"testing-library/no-dom-import": ["error", "react"],
			"testing-library/no-global-regexp-flag-in-query": "error",
			"testing-library/no-manual-cleanup": "error",
			"testing-library/no-node-access": "error",
			"testing-library/no-promise-in-fire-event": "off",
			"testing-library/no-render-in-lifecycle": "error",
			"testing-library/no-unnecessary-act": "error",
			"testing-library/no-wait-for-multiple-assertions": "error",
			"testing-library/no-wait-for-side-effects": "error",
			"testing-library/no-wait-for-snapshot": "error",
			"testing-library/prefer-explicit-assert": "error",
			"testing-library/prefer-implicit-assert": "off",
			"testing-library/prefer-find-by": "error",
			"testing-library/prefer-presence-queries": "error",
			"testing-library/prefer-query-by-disappearance": "error",
			"testing-library/prefer-query-matchers": "off",
			"testing-library/prefer-screen-queries": "error",
			"testing-library/prefer-user-event": "error",
			"testing-library/render-result-naming-convention": "off",
		},
	},
	{
		files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.test.ts", "**/*.test.tsx"],
		plugins: {
			jest,
		},
		rules: {
			"jest/no-untyped-mock-factory": "error",
		},
	},
];
