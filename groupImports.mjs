// biome-ignore lint/style/noDefaultExport: Required for ESLint
export default [
	{
		rules: {
			"sort-imports": [
				"error",
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
				},
			],

			"import/order": [
				"error",
				{
					groups: [
						"unknown",
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
					],

					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
	},
];
