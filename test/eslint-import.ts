// ESLint Import Plugin Rules Test File
// Each section contains code that triggers the corresponding rule

// importPlugin/no-empty-named-blocks
import {} from "node:path";

// importPlugin/no-mutable-exports
export let mutableExport = 1;

// importPlugin/no-named-as-default
// When a module has both default and named export with same name
// import foo from './foo'; // where foo.js has: export default foo; export { foo };

// importPlugin/no-absolute-path
import absolutePath from "/absolute/path/to/module";

// importPlugin/no-self-import
// This would be: import self from './eslint-import';

// importPlugin/no-useless-path-segments
import uselessSegment from "./folder/../eslint-core";

// importPlugin/no-webpack-loader-syntax
import webpackLoader from "style-loader!css-loader!./styles.css";

// importPlugin/first - imports should be first
const beforeImport = 1;
import lateImport from "node:fs";

// importPlugin/group-exports - exports should be grouped
export const export1 = 1;
const internal = 2;
export const export2 = 2;

// importPlugin/no-anonymous-default-export
export default function () {
	return "anonymous";
}

// importPlugin/no-duplicates
import { readFile } from "node:fs";
import { writeFile } from "node:fs";

export { beforeImport, internal, readFile, writeFile, lateImport };
