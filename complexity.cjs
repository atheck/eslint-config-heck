/* eslint-disable strict */

module.exports = {
	rules: {
		"max-depth": ["warn", 2],
		"max-statements": ["warn", 20],
		"max-params": ["warn", 3],
	},
	overrides: [
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
			rules: {
				"max-statements": "off",
				"max-params": "off",
			},
		},
	],
};
