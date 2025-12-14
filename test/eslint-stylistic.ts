// ESLint Stylistic Rules Test File
// Each section contains code that triggers the corresponding rule

// @stylistic/multiline-comment-style
/*
 * This is a block comment
 * that should be separate lines
 */

// @stylistic/padding-line-between-statements
// Missing blank line before return
function noBlankBeforeReturn(): number {
	const result = 1;
	return result;
}
// Missing blank line after const/let/var
const afterConst = 1;
console.log(afterConst);

// Missing blank line before const/let/var
console.log("before");
const beforeConst = 2;

// Missing blank line after import (at file level - imports should have blank line after)

// Missing blank line before export (at file level)

// Missing blank line before function
const beforeFunc = 3;
function noBlankBeforeFunction(): void {}

// @stylistic/spaced-comment
//no space after slashes
/*no space after asterisk*/

export {
	noBlankBeforeReturn,
	afterConst,
	beforeConst,
	beforeFunc,
	noBlankBeforeFunction,
};
