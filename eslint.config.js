import { defineConfig } from "eslint/config";
import nodeWithBiome from "./nodeWithBiome.js";

// biome-ignore lint/style/noDefaultExport: Required for ESLint configuration
export default defineConfig({
	extends: [nodeWithBiome],
});
