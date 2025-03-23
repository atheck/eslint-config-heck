import { defineConfig } from "eslint/config";
import complexity from "./complexity.js";
import groupImports from "./groupImports.js";
import nodeWithBiome from "./nodeWithBiome.js";

// biome-ignore lint/style/noDefaultExport: Required for ESLint configuration
export default defineConfig({
	extends: [nodeWithBiome, complexity, groupImports],
});
