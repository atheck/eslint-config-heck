// import/no-unresolved: off - handled by Typescript
import * as unresolved from "not-installed";
const newline = 0;
// import/name: off - handled by Typescript
import { notExisting } from "./ES6";

// import/default: off - handled by Typescript
import Default from "./BestPractices";

// import/namespace: off - handled by Typescript

// import/no-absolute-path
import absolute from "/home/heck/Projekte/NodeJs/eslint-config-heck/test/Typescript";

// import/no-webpack-loader-syntax
import * as Self from "./import";

// import/export: off - handled by Typescript
const defaultExport1 = 1;
const defaultExport2 = 2;

export default defaultExport1;
export default defaultExport2;

import * as First from "./React";

// no-duplicates
import { AbstractKeyword } from "typescript";
import { AccessExpression } from "typescript";