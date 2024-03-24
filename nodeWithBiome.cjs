/* eslint-disable strict */

const path = require("node:path");

const parserOptions = {
	sourceType: "script",

	ecmaVersion: 13,
	ecmaFeatures: {
		globalReturn: false,
		impliedStrict: false,
		jsx: true,
	},
};

const env = {
	es2022: true,
	node: true,
};

const globals = {};
const extendConfigs = ["plugin:import/typescript"];
const plugins = ["react", "react-hooks", "unicorn", "import"];
const settings = {
	react: {
		version: "detect",
	},
};

const rules = {
	// Possible problems
	"for-direction": "off",
	"getter-return": "off",
	"no-async-promise-executor": "off",
	"no-await-in-loop": "warn",
	"no-compare-neg-zero": "off",
	"no-cond-assign": "off",
	"no-console": "off",
	"no-constant-binary-expression": "error",
	"no-constant-condition": "off",
	"no-control-regex": "off",
	"no-debugger": "off",
	"no-dupe-args": "off",
	"no-dupe-else-if": "error",
	"no-dupe-keys": "off",
	"no-duplicate-case": "off",
	"no-empty": "off",
	"no-empty-character-class": "off",
	"no-ex-assign": "off",
	"no-extra-boolean-cast": "off",
	"no-extra-parens": "off",
	"no-extra-semi": "off",
	"no-func-assign": "off",
	"no-import-assign": "off",
	"no-inner-declarations": "off",
	"no-invalid-regexp": "error",
	"no-irregular-whitespace": [
		"error",
		{
			skipComments: false,
			skipRegExps: false,
			skipStrings: false,
			skipTemplates: false,
		},
	],
	"no-loss-of-precision": "off",
	"no-misleading-character-class": "off",
	"no-new-native-nonconstructor": "off",
	"no-obj-calls": "off",
	"no-promise-executor-return": "error",
	"no-prototype-builtins": "off",
	"no-regex-spaces": "off",
	"no-setter-return": "off",
	"no-sparse-arrays": "off",
	"no-template-curly-in-string": "error",
	"no-unexpected-multiline": "error",
	"no-unreachable": "off",
	"no-unreachable-loop": "error",
	"no-unsafe-finally": "off",
	"no-unsafe-negation": "off",
	"no-unsafe-optional-chaining": "off",
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
	"array-callback-return": [
		"error",
		{
			allowImplicit: true,
			checkForEach: false,
		},
	],
	"block-scoped-var": "error",
	"class-methods-use-this": "error",
	complexity: "off",
	"consistent-return": "error",
	curly: "off",
	"default-case": "off",
	"default-case-last": "off",
	"default-param-last": "off",
	"dot-location": "off",
	"dot-notation": "off",
	eqeqeq: "off",
	"grouped-accessor-pairs": ["error", "getBeforeSet"],
	"guard-for-in": "error",
	"logical-assignment-operators": "error",
	"max-classes-per-file": "off",
	"no-alert": "error",
	"no-caller": "error",
	"no-case-declarations": "off",
	"no-constructor-return": "off",
	"no-div-regex": "off",
	"no-else-return": "off",
	"no-empty-function": "error",
	"no-empty-pattern": "off",
	"no-empty-static-block": "off",
	"no-eq-null": "off",
	"no-eval": "off",
	"no-extend-native": "error",
	"no-extra-bind": "error",
	"no-extra-label": "off",
	"no-fallthrough": "off",
	"no-floating-decimal": "error",
	"no-global-assign": "off",
	"no-implicit-coercion": "error",
	"no-implicit-globals": "off",
	"no-implied-eval": "error",
	"no-invalid-this": "error",
	"no-iterator": "error",
	"no-labels": "error",
	"no-lone-blocks": "error",
	"no-loop-func": "error",
	"no-magic-numbers": "off",
	"no-multi-spaces": "off",
	"no-multi-str": "error",
	"no-new": "error",
	"no-new-func": "error",
	"no-new-wrappers": "error",
	"no-nonoctal-decimal-escape": "off",
	"no-octal-escape": "error",
	"no-param-reassign": "off",
	"no-proto": "error",
	"no-redeclare": "off",
	"no-restricted-properties": "off",
	"no-return-assign": "off",
	"no-script-url": "error",
	"no-self-assign": "off",
	"no-self-compare": "off",
	"no-sequences": "off",
	"no-throw-literal": "error",
	"no-unmodified-loop-condition": "error",
	"no-unused-expressions": "error",
	"no-unused-labels": "off",
	"no-useless-call": "error",
	"no-useless-catch": "off",
	"no-useless-concat": "error",
	"no-useless-escape": "error",
	"no-useless-return": "error",
	"no-void": "off",
	"no-warning-comments": "warn",
	"no-with": "off",
	"prefer-named-capture-group": "error",
	"prefer-object-has-own": "error",
	"prefer-promise-reject-errors": "error",
	"prefer-regex-literals": "error",
	radix: ["error", "always"],
	"require-await": "off",
	"require-unicode-regexp": "error",
	"vars-on-top": "error",
	"wrap-iife": "off",
	yoda: [
		"error",
		"never",
		{
			exceptRange: true,
			onlyEquality: false,
		},
	],

	// Strict mode
	strict: ["error", "global"],

	// Variables
	"init-declarations": "off",
	"no-delete-var": "off",
	"no-label-var": "off",
	"no-restricted-globals": "off",
	"no-shadow": "error",
	"no-shadow-restricted-names": "off",
	"no-undef": "off",
	"no-undef-init": "error",
	"no-undefined": "off",
	"no-unused-vars": "off",
	"no-use-before-define": ["error", "nofunc"],

	// Layout & Formatting
	"array-bracket-newline": "off",
	"array-bracket-spacing": "off",
	"array-element-newline": "off",
	"block-spacing": "off",
	"brace-style": "off",
	camelcase: "error",
	"capitalized-comments": "off",
	"comma-dangle": "off",
	"comma-spacing": "off",
	"comma-style": "off",
	"computed-property-spacing": "off",
	"consistent-this": ["error", "that"],
	"eol-last": "off",
	"func-call-spacing": "off",
	"func-name-matching": "off",
	"func-names": "off",
	"func-style": ["error", "declaration", { allowArrowFunctions: true }],
	"function-call-argument-newline": "off",
	"function-paren-newline": "off",
	"id-denylist": "off",
	"id-length": [
		"error",
		{
			exceptions: ["_", "i", "j", "x", "y", "z"],
		},
	],
	"id-match": "off",
	"implicit-arrow-linebreak": "off",
	indent: "off",
	"jsx-quotes": "off",
	"key-spacing": "off",
	"keyword-spacing": "off",
	// redundant with no-inline-comments
	"line-comment-position": "off",
	"linebreak-style": "off",
	"lines-around-comment": "off",
	"lines-between-class-members": "off",
	"max-depth": "off",
	"max-len": "off",
	"max-lines": "off",
	"max-lines-per-function": "off",
	"max-nested-callbacks": "off",
	"max-params": "off",
	"max-statements": "off",
	"max-statements-per-line": "error",
	"multiline-comment-style": ["error", "separate-lines"],
	"multiline-ternary": "off",
	"new-cap": "error",
	"new-parens": "off",
	"newline-per-chained-call": "off",
	"no-array-constructor": "error",
	"no-bitwise": [
		"error",
		{
			allow: [],
			int32Hint: false,
		},
	],
	"no-continue": "off",
	"no-inline-comments": "error",
	"no-lonely-if": "off",
	"no-mixed-operators": "off",
	"no-mixed-spaces-and-tabs": "off",
	"no-multi-assign": "error",
	"no-multiple-empty-lines": "off",
	"no-negated-condition": "off",

	"no-nested-ternary": "error",
	"no-object-constructor": "error",
	"no-plusplus": "off",
	"no-restricted-syntax": "off",
	"no-tabs": "off",
	"no-ternary": "off",
	"no-trailing-spaces": "off",
	"no-underscore-dangle": [
		"error",
		{
			enforceInMethodNames: true,
		},
	],
	"no-unneeded-ternary": "off",
	"no-whitespace-before-property": "off",
	"nonblock-statement-body-position": "off",
	"object-curly-newline": "off",
	"object-curly-spacing": "off",
	"object-property-newline": "off",
	"one-var": "off",
	"one-var-declaration-per-line": "off",
	"operator-assignment": "off",
	"operator-linebreak": "off",
	"padded-blocks": "off",
	"padding-line-between-statements": [
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
	"prefer-exponentiation-operator": "off",
	"prefer-object-spread": "error",
	"quote-props": ["error", "as-needed"],
	quotes: "off",
	semi: "off",
	"semi-spacing": "off",
	"semi-style": "off",
	"sort-keys": "off",
	"sort-vars": "off",
	"space-before-blocks": "off",
	"space-before-function-paren": "off",
	"space-in-parens": "off",
	"space-infix-ops": "off",
	"space-unary-ops": "off",
	"spaced-comment": ["error", "always"],
	"switch-colon-spacing": "off",
	"template-tag-spacing": "off",
	"unicode-bom": "error",
	"wrap-regex": "off",

	// ECMAScript6
	"arrow-body-style": ["error", "as-needed"],
	"arrow-parens": "off",
	"arrow-spacing": "off",
	"constructor-super": "off",
	"generator-star-spacing": "off",
	"no-class-assign": "off",
	"no-confusing-arrow": "off",
	"no-const-assign": "off",
	"no-dupe-class-members": "off",
	"no-duplicate-imports": "off",
	"no-new-symbol": "off",
	"no-restricted-imports": "off",
	"no-restricted-exports": "off",
	"no-this-before-super": "off",
	"no-useless-computed-key": [
		"error",
		{
			enforceForClassMembers: true,
		},
	],
	"no-useless-constructor": "off",
	"no-useless-rename": "off",
	"no-var": "off",
	"object-shorthand": [
		"error",
		"always",
		{
			avoidExplicitReturnArrows: true,
		},
	],
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
	"prefer-numeric-literals": "off",
	"prefer-rest-params": "off",
	"prefer-spread": "error",
	"prefer-template": "off",
	"require-yield": "off",
	"rest-spread-spacing": "off",
	"sort-imports": "off",
	"symbol-description": "error",
	"template-curly-spacing": "off",
	"yield-star-spacing": "off",

	// eslint-plugin-react
	"react/boolean-prop-naming": "off",
	"react/button-has-type": "off",
	"react/checked-requires-onchange-or-readonly": "error",
	"react/default-props-match-prop-types": "off",
	"react/destructuring-assignment": [
		"error",
		"always",
		{ destructureInSignature: "always" },
	],
	"react/display-name": "off",
	"react/forbid-component-props": "off",
	"react/forbid-dom-props": "off",
	"react/forbid-elements": "off",
	"react/forbid-foreign-prop-types": "off",
	"react/forbid-prop-types": "off",
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
	"react/jsx-curly-newline": "off",
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
	"react/jsx-indent": "off",
	"react/jsx-indent-props": "off",
	"react/jsx-key": "off",
	"react/jsx-max-depth": "off",
	"react/jsx-max-props-per-line": "off",
	"react/jsx-newline": "off",
	"react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
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
	"react/jsx-one-expression-per-line": "off",
	"react/jsx-pascal-case": "error",
	"react/jsx-props-no-multi-spaces": "off",
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
	"react/no-deprecated": "error",
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
	"unicorn/consistent-function-scoping": [
		"error",
		{
			checkArrowFunctions: false,
		},
	],
	"unicorn/custom-error-definition": "off",
	"unicorn/empty-brace-spaces": "off",
	"unicorn/error-message": "error",
	"unicorn/escape-case": "error",
	"unicorn/expiring-todo-comments": "error",
	"unicorn/explicit-length-check": "error",
	"unicorn/filename-case": "off",
	"unicorn/import-style": "error",
	"unicorn/new-for-builtins": "error",
	"unicorn/no-abusive-eslint-disable": "error",
	"unicorn/no-array-callback-reference": "off",
	"unicorn/no-array-for-each": "off",
	"unicorn/no-array-method-this-argument": "error",
	"unicorn/no-array-push-push": "error",
	"unicorn/no-array-reduce": "off",
	"unicorn/no-await-expression-member": "error",
	"unicorn/no-console-spaces": "error",
	"unicorn/no-document-cookie": "error",
	"unicorn/no-empty-file": "error",
	"unicorn/no-for-loop": "error",
	"unicorn/no-hex-escape": "error",
	"unicorn/no-instanceof-array": "off",
	"unicorn/no-invalid-remove-event-listener": "error",
	"unicorn/no-keyword-prefix": "off",
	"unicorn/no-lonely-if": "off",
	"unicorn/no-negated-condition": "off",
	"unicorn/no-nested-ternary": "off",
	"unicorn/no-new-array": "error",
	"unicorn/no-new-buffer": "error",
	"unicorn/no-null": "off",
	"unicorn/no-object-as-default-parameter": "error",
	"unicorn/no-process-exit": "error",
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
	"unicorn/number-literal-case": "off",
	"unicorn/numeric-separators-style": "error",
	"unicorn/prefer-add-event-listener": "error",
	"unicorn/prefer-array-find": [
		"error",
		{
			checkFromLast: true,
		},
	],
	"unicorn/prefer-array-flat": "error",
	"unicorn/prefer-array-flat-map": "off",
	"unicorn/prefer-array-index-of": "error",
	"unicorn/prefer-array-some": "error",
	"unicorn/prefer-at": "error",
	"unicorn/prefer-blob-reading-methods": "error",
	"unicorn/prefer-code-point": "error",
	"unicorn/prefer-date-now": "error",
	"unicorn/prefer-default-parameters": "error",
	"unicorn/prefer-dom-node-append": "error",
	"unicorn/prefer-dom-node-dataset": "error",
	"unicorn/prefer-dom-node-remove": "error",
	"unicorn/prefer-dom-node-text-content": "error",
	"unicorn/prefer-event-target": "off",
	"unicorn/prefer-export-from": "off",
	"unicorn/prefer-includes": "error",
	"unicorn/prefer-json-parse-buffer": "error",
	"unicorn/prefer-keyboard-event-key": "error",
	"unicorn/prefer-logical-operator-over-ternary": "error",
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

	"unicorn/prefer-string-replace-all": "error",
	"unicorn/prefer-string-slice": "error",
	"unicorn/prefer-string-starts-ends-with": "error",
	"unicorn/prefer-string-trim-start-end": "error",
	"unicorn/prefer-switch": "error",

	// TODO: off until there is a solution to this: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1079
	"unicorn/prefer-ternary": "off",
	"unicorn/prefer-top-level-await": "off",
	"unicorn/prefer-type-error": "error",
	"unicorn/prevent-abbreviations": "off",
	"unicorn/relative-url-style": "error",
	"unicorn/require-array-join-separator": "error",
	"unicorn/require-number-to-fixed-digits-argument": "error",
	"unicorn/require-post-message-target-origin": "error",
	"unicorn/string-content": "off",
	"unicorn/switch-case-braces": "off",
	"unicorn/template-indent": "off",
	"unicorn/text-encoding-identifier-case": "error",
	"unicorn/throw-new-error": "error",

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
};

const overrides = [
	{
		files: ["*.ts", "*.tsx"],
		parser: "@typescript-eslint/parser",
		parserOptions: {
			...parserOptions,
			sourceType: "module",
			project: path.join(".", "tsconfig.json"),
		},
		globals: {
			...globals,
			NodeJS: true,
		},
		plugins: [...plugins, "@typescript-eslint", "deprecation"],
		rules: {
			// Typescript
			"@typescript-eslint/adjacent-overload-signatures": "error",
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
			"@typescript-eslint/consistent-indexed-object-style": "error",
			"@typescript-eslint/consistent-type-assertions": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
			"@typescript-eslint/consistent-type-imports": "off",
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
			"@typescript-eslint/explicit-member-accessibility": "error",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/member-delimiter-style": "off",
			"@typescript-eslint/member-ordering": "off",
			"@typescript-eslint/method-signature-style": "error",
			camelcase: "off",
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: ["variableLike", "memberLike"],
					format: ["strictCamelCase", "StrictPascalCase"],
					filter: {
						regex: "^__html$",
						match: false,
					},
				},
				{
					selector: ["parameter"],
					modifiers: ["unused"],
					format: ["strictCamelCase"],
					leadingUnderscore: "require",
				},
				{
					selector: ["typeLike"],
					format: ["StrictPascalCase"],
				},
				{
					selector: ["typeParameter"],
					format: ["StrictPascalCase"],
					prefix: ["T"],
				},
				{
					selector: "variable",
					modifiers: ["destructured"],
					format: null,
				},
			],
			"@typescript-eslint/no-array-delete": "off",
			"@typescript-eslint/no-base-to-string": "error",
			"@typescript-eslint/no-confusing-non-null-assertion": "error",
			"@typescript-eslint/no-confusing-void-expression": "off",
			"@typescript-eslint/no-duplicate-enum-values": "error",
			"@typescript-eslint/no-duplicate-type-constituents": "error",
			"@typescript-eslint/no-dynamic-delete": "error",
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
			"@typescript-eslint/no-import-type-side-effects": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/no-invalid-void-type": "off",
			"@typescript-eslint/no-meaningless-void-operator": "off",
			"@typescript-eslint/no-misused-new": "off",
			"@typescript-eslint/no-misused-promises": "error",
			"@typescript-eslint/no-mixed-enums": "off",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-redundant-type-constituents": "error",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-this-alias": "off",
			"@typescript-eslint/no-type-alias": "off",
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
			"@typescript-eslint/no-unnecessary-condition": "error",
			"@typescript-eslint/no-unnecessary-qualifier": "error",
			"@typescript-eslint/no-unnecessary-type-arguments": "error",
			"@typescript-eslint/no-unnecessary-type-assertion": "error",
			"@typescript-eslint/no-unnecessary-type-constraint": "off",
			"@typescript-eslint/no-unsafe-argument": "error",
			"@typescript-eslint/no-unsafe-assignment": "error",
			"@typescript-eslint/no-unsafe-call": "error",
			"@typescript-eslint/no-unsafe-declaration-merging": "off",
			"@typescript-eslint/no-unsafe-enum-comparison": "error",
			"@typescript-eslint/no-unsafe-member-access": "error",
			"@typescript-eslint/no-unsafe-return": "error",
			"@typescript-eslint/no-unsafe-unary-minus": "error",
			"@typescript-eslint/no-useless-empty-export": "off",
			"@typescript-eslint/no-useless-template-literals": "error",
			"@typescript-eslint/no-var-requires": "error",
			"@typescript-eslint/non-nullable-type-assertion-style": "off",
			"@typescript-eslint/parameter-properties": "off",
			"@typescript-eslint/prefer-as-const": "off",
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
					ignoreConditionalTests: true,
					ignoreMixedLogicalExpressions: true,
				},
			],
			"@typescript-eslint/prefer-optional-chain": "error",
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
			"@typescript-eslint/prefer-ts-expect-error": "error",
			"@typescript-eslint/promise-function-async": "error",
			"@typescript-eslint/require-array-sort-compare": "error",
			"@typescript-eslint/restrict-plus-operands": "error",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/switch-exhaustiveness-check": [
				"error",
				{
					allowDefaultCaseForExhaustiveSwitch: false,
					requireDefaultForNonUnion: true,
				},
			],
			"@typescript-eslint/triple-slash-reference": "error",
			"@typescript-eslint/type-annotation-spacing": "off",
			"@typescript-eslint/typedef": "off",
			"@typescript-eslint/unbound-method": [
				"error",
				{
					ignoreStatic: true,
				},
			],
			"@typescript-eslint/unified-signatures": "error",
			"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",

			// Extension rules
			"block-spacing": "off",
			"@typescript-eslint/block-spacing": "off",
			"brace-style": "off",
			"@typescript-eslint/brace-style": "off",
			"class-methods-use-this": "off",
			"@typescript-eslint/class-methods-use-this": "error",
			"comma-dangle": "off",
			"@typescript-eslint/comma-dangle": "off",
			"comma-spacing": "off",
			"@typescript-eslint/comma-spacing": "off",
			"default-param-last": "off",
			"@typescript-eslint/default-param-last": "off",
			"dot-notation": "off",
			"@typescript-eslint/dot-notation": "off",
			"func-call-spacing": "off",
			"@typescript-eslint/func-call-spacing": "off",
			indent: "off",
			"@typescript-eslint/indent": "off",
			"init-declarations": "off",
			"@typescript-eslint/init-declarations": "off",
			"key-spacing": "off",
			"@typescript-eslint/key-spacing": "off",
			"keyword-spacing": "off",
			"@typescript-eslint/keyword-spacing": "off",
			"lines-between-class-members": "off",
			"@typescript-eslint/lines-between-class-members": "off",
			"no-array-constructor": "off",
			"@typescript-eslint/no-array-constructor": "error",
			"no-dupe-class-members": "off",
			"@typescript-eslint/no-dupe-class-members": "off",
			"no-empty-function": "off",
			"@typescript-eslint/no-empty-function": "error",
			"no-extra-parens": "off",
			"@typescript-eslint/no-extra-parens": "off",
			"no-extra-semi": "off",
			"@typescript-eslint/no-extra-semi": "off",
			"no-implied-eval": "off",
			"@typescript-eslint/no-implied-eval": "error",
			"no-invalid-this": "off",
			"@typescript-eslint/no-invalid-this": "error",
			"no-loop-func": "off",
			"@typescript-eslint/no-loop-func": "error",
			"no-loss-of-precision": "off",
			"@typescript-eslint/no-loss-of-precision": "off",
			"no-magic-numbers": "off",
			"@typescript-eslint/no-magic-numbers": "off",
			"no-redeclare": "off",
			"@typescript-eslint/no-redeclare": "off",
			"no-restricted-imports": "off",
			"@typescript-eslint/no-restricted-imports": "off",
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": "error",
			"no-throw-literal": "off",
			"@typescript-eslint/no-throw-literal": [
				"error",
				{
					allowThrowingAny: false,
					allowThrowingUnknown: false,
				},
			],
			"no-unused-expressions": "off",
			"@typescript-eslint/no-unused-expressions": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"no-use-before-define": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"no-useless-constructor": "off",
			"@typescript-eslint/no-useless-constructor": "off",
			"object-curly-spacing": "off",
			"@typescript-eslint/object-curly-spacing": "off",
			"padding-line-between-statements": "off",
			"@typescript-eslint/padding-line-between-statements": [
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
					prev: "import",
					next: "*",
				},
				{
					blankLine: "never",
					prev: "import",
					next: "import",
				},
				// export
				{
					blankLine: "always",
					prev: "*",
					next: "export",
				},
				{
					blankLine: "any",
					prev: "export",
					next: "export",
				},
				// function
				{
					blankLine: "always",
					prev: "*",
					next: "function",
				},
				// interface
				{
					blankLine: "always",
					prev: "*",
					next: "interface",
				},
				{
					blankLine: "always",
					prev: "interface",
					next: "*",
				},
				// type
				{
					blankLine: "always",
					prev: "*",
					next: "type",
				},
				{
					blankLine: "any",
					prev: "type",
					next: "type",
				},
			],
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
			"prefer-promise-reject-errors": "off",
			"@typescript-eslint/prefer-promise-reject-errors": "error",
			quotes: "off",
			"@typescript-eslint/quotes": "off",
			"require-await": "off",
			"@typescript-eslint/require-await": "off",
			"@typescript-eslint/return-await": "off",
			semi: "off",
			"@typescript-eslint/semi": "off",
			"space-before-blocks": "off",
			"@typescript-eslint/space-before-blocks": "off",
			"space-before-function-paren": "off",
			"@typescript-eslint/space-before-function-paren": "off",
			"space-infix-ops": "off",
			"@typescript-eslint/space-infix-ops": "off",

			// Deprecation
			"deprecation/deprecation": "warn",

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
			"*.spec.ts",
			"*.spec.tsx",
			"*.test.ts",
			"*.test.tsx",
			"*.spec.js",
			"*.spec.jsx",
			"*.test.js",
			"*.test.jsx",
		],
		plugins: ["jest", "testing-library"],
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
			"jest/no-deprecated-functions": "error",
			"jest/no-disabled-tests": "off",
			"jest/no-done-callback": "error",
			"jest/no-duplicate-hooks": "off",
			"jest/no-export": "off",
			"jest/no-focused-tests": "off",
			"jest/no-hooks": "off",
			"jest/no-identical-title": "error",
			"jest/no-interpolation-in-snapshots": "error",
			"jest/no-jasmine-globals": "error",
			"jest/no-large-snapshots": "off",
			"jest/no-mocks-import": "error",
			"jest/no-restricted-matchers": "off",
			"jest/no-standalone-expect": "error",
			"jest/no-test-prefixes": "error",
			"jest/no-test-return-statement": "error",
			"jest/prefer-called-with": "error",
			"jest/prefer-comparison-matcher": "error",
			"jest/prefer-each": "error",
			"jest/prefer-equality-matcher": "error",
			"jest/prefer-expect-assertions": "off",
			"jest/prefer-expect-resolves": "error",
			"jest/prefer-hooks-on-top": "error",
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
		files: ["*.spec.ts", "*.spec.tsx", "*.test.ts", "*.test.tsx"],
		plugins: ["jest"],
		rules: {
			// eslint-plugin-jest
			"jest/no-untyped-mock-factory": "error",
		},
	},
];

module.exports = {
	extends: extendConfigs,
	parserOptions,
	env,
	globals,
	plugins,
	settings,
	rules,
	overrides,

	reportUnusedDisableDirectives: true,
};
