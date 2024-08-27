// for-direction
const forDirection = function (): void {
	for (let i = 0; i < 10; i--) {}
};

// getter-return: off (typescript handles it)
class GetterReturn {
	get name() {}
}

// no-async-promise-executor
const noAsyncPromiseExecutor = function (): void {
	new Promise(async (resolve, reject) => {
		resolve(null);
	});
};

// no-await-in-loop
const noAwaitInLoop = async function (): Promise<void> {
	for (const value of [1, 2, 3]) {
		await noAsyncPromiseExecutor();
	}
};

// no-compare-neg-zero
const noCompareNegZero = function (): void {
	const value = 0;
	if (value === -0) {
	}
};

// no-cond-assign
const noCondAssign = function (): void {
	let value = "";
	if ((value = "value")) {
	}
};

// no-console
console.log("ESLint");

// no-constant-condition
if (false) {
}

// no-control-regex
const regex = /\x1f/;

// no-debugger
debugger;

// no-dupe-args: off (typescript handles it)
const NoDupeArgs = function (a: number, b: number, a: number): void {};

// no-dupe-else-if
const a = true;
const b = false;
if (a) {
} else if (b) {
} else if (b) {
}

// no-dupe-keys: off (typescript handles it)
const dupeKeys = {
	bar: "",
	bar: "",
	1: "",
	0x1: "",
};

// no-duplicate-case
let caseValue = 1;
switch (caseValue) {
	case 1:
		break;

	case 1:
		break;
}

// no-empty
if (true) {
}

// no-empty-character-class
const emptyCharClass = /[]/;

// no-ex-assign

try {
	// blank
} catch (ex) {
	ex = 10;
}

// no-extra-boolean-case
const castedToBool = undefined;
if (!!castedToBool) {
}

// no-extra-semi
const noExtraSemi = 1;

// no-func-assign: off (typescript handles it)
function noFuncAssign(): void {}
noFuncAssign = function (): void {};

let someFuncAssign = function (): void {};

someFuncAssign = function (): void {};

// no-import-assign: off (typescript handles ist)
import { checkPropertyChange } from "json-schema";

checkPropertyChange = 1;

// no-inner-declarations
if (true) {
	function noInnerDecl() {}
}

// no-invalid-regexp
const noInvalidRegexp = new RegExp("[");

// no-loss-of-precision
const lossOfPrecision = 5123000000000000000000000000001;

// no-misleading-character-class
const misleadingCharacterClass = /^[❇️]$/u;

// no-obj-calls: off (typescript handles it)
const math = Math();
const theMath = new Math();

// no-promise-executor-return
const promiseExecutorReturn = new Promise((resolve, reject) => {
	return 1;
});

// no-prototype-builtins
const noPrototypeBuiltIns = {};
noPrototypeBuiltIns.hasOwnProperty("bar");

// no-regex-spaces
const regexSpaces = /a    b/;

// no-setter-return: off (typescript handles it)
class SetterReturn {
	set name(value: string) {
		return "";
	}
}

// no-sparse-arrays
const sparseArray = [1, , , 2];

// no-template-curly-in-string
const templateInString = "${name}";

// no-unexpected-multiline: off (typescript handles it)
const bar = 1;
var foo = bar(1 || 2).baz();

const hello = "world"[(1, 2, 3)].forEach(console.log);

let x = function () {};
x`hello`;

// no-unreachable
function unreachable(): void {
	return;

	const a = 2;
}

// no-unreachable-loop
while (true) {
	break;
}

// no-unsafe-finally
function unsafeFinally() {
	try {
		return 1;
	} finally {
		return 2;
	}
}

// no-unsafe-negation: off (typescript handles it)
const key = "";
if ((!key) in {}) {
}

if ((!{}) instanceof Array) {
}

// no-unsafe-optional-chaining
const unsafeOptionalChaining = undefined;
(unsafeOptionalChaining?.foo)();

// no-useless-backreference
const uselessBackReference = /^(?:(a)|b(?:c|\1))$/;

// use-isnan

if (1 === NaN) {
}

// valid-typeof: off (typescript handles it)
const typeofString = "";
if (typeof typeofString === "str") {
}

export {};
