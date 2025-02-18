import reactNative from "eslint-plugin-react-native";

// biome-ignore lint/style/noDefaultExport: Required for ESLint configuration
export default [
	{
		plugins: {
			"react-native": reactNative,
		},
		rules: {
			"react-native/no-color-literals": "error",
			"react-native/no-inline-styles": "error",
			"react-native/no-raw-text": "error",
			"react-native/no-single-element-style-arrays": "error",
			"react-native/no-unused-styles": "error",
			"react-native/sort-styles": "off",
			"react-native/split-platform-components": "error",
		},
	},
];
