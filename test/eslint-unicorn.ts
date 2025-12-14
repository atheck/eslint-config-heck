// ESLint Unicorn Rules Test File
// Each section contains code that triggers the corresponding rule

// unicorn/better-regex
const badRegex = /[0-9]/;

// unicorn/catch-error-name
try {
	throw new Error("test");
} catch (error) {
	console.log(error);
}

// unicorn/consistent-assert
import assert from "node:assert";
assert(true === true);

// unicorn/consistent-date-clone
const date = new Date();
const clonedDate = new Date(date.getTime());

// unicorn/consistent-destructuring
const obj = { prop1: 1, prop2: 2 };
const { prop1 } = obj;
const prop2 = obj.prop2;

// unicorn/consistent-empty-array-spread
const emptySpread = [...[], 1, 2];

// unicorn/consistent-existence-index-check
const arr = ["a", "b", "c"];
if (arr.indexOf("b") !== -1) {
	console.log("found");
}

// unicorn/consistent-function-scoping
function outer(): void {
	function inner(): void {
		console.log("inner");
	}
	inner();
}

// unicorn/escape-case
const escapeCase = "\xa9";

// unicorn/expiring-todo-comments
// TODO [2020-01-01]: This is expired

// unicorn/import-style
import * as path from "node:path";

// unicorn/no-abusive-eslint-disable
/* eslint-disable */

// unicorn/no-accessor-recursion
class AccessorRecursion {
	get value(): number {
		return this.value;
	}
}

// unicorn/no-anonymous-default-export
// export default function() {}

// unicorn/no-array-method-this-argument
const numbers = [1, 2, 3];
numbers.map(function (item) {
	return item * 2;
}, {});

// unicorn/no-array-reverse
const reversed = [1, 2, 3].reverse();

// unicorn/no-array-sort
const sorted = [3, 1, 2].sort();

// unicorn/no-await-expression-member
async function awaitMember(): Promise<number> {
	return (await Promise.resolve({ length: 5 })).length;
}

// unicorn/no-await-in-promise-methods
async function awaitInPromiseAll(): Promise<void> {
	await Promise.all([await Promise.resolve(1)]);
}

// unicorn/no-console-spaces
console.log(" spaced ");

// unicorn/no-hex-escape
const hexEscape = "\x1B";

// unicorn/no-immediate-mutation
const immediatelyMutated = [1, 2].reverse();

// unicorn/no-instanceof-builtins
if ({} instanceof Object) {
	console.log("is object");
}

// unicorn/no-invalid-fetch-options
fetch("https://example.com", { body: "data" });

// unicorn/no-invalid-remove-event-listener
const handler = (): void => {};
document.removeEventListener("click", handler.bind(null));

// unicorn/no-magic-array-flat-depth
const deepArray = [[[[1]]]];
deepArray.flat(4);

// unicorn/no-named-default
// import { default as foo } from './module';

// unicorn/no-negation-in-equality-check
let foo = true;
let bar = false;
if (!foo === bar) {
	console.log("negation");
}

// unicorn/no-new-array
const newArray = new Array(10);

// unicorn/no-new-buffer
const newBuffer = new Buffer("data");

// unicorn/no-object-as-default-parameter
function objectDefault(options = { value: 1 }): number {
	return options.value;
}

// unicorn/no-single-promise-in-promise-methods
Promise.all([Promise.resolve(1)]);

// unicorn/no-this-assignment
class ThisAssignment {
	method(): void {
		const self = this;
		console.log(self);
	}
}

// unicorn/no-unnecessary-array-flat-depth
const flatArray = [[1, 2]];
flatArray.flat(1);

// unicorn/no-unnecessary-array-splice-count
const spliceArray = [1, 2, 3];
spliceArray.splice(0, spliceArray.length);

// unicorn/no-unnecessary-await
async function unnecessaryAwait(): Promise<number> {
	return await 42;
}

// unicorn/no-unnecessary-slice-end
const sliceArray = [1, 2, 3];
sliceArray.slice(0, sliceArray.length);

// unicorn/no-unreadable-array-destructuring
const [, , , fourth] = [1, 2, 3, 4];

// unicorn/no-unreadable-iife
const iife = ((): number => ((): number => 1)())();

// unicorn/no-unused-properties
const unusedProps = {
	used: 1,
	unused: 2,
};
console.log(unusedProps.used);

// unicorn/no-useless-collection-argument
const emptySet = new Set([]);

// unicorn/no-useless-fallback-in-spread
const fallbackSpread = { ...({ foo: "bar" } || {}) };

// unicorn/no-useless-length-check
const lengthCheck = [1, 2, 3];
if (lengthCheck.length > 0 && lengthCheck.every((x) => x > 0)) {
	console.log("all positive");
}

// unicorn/no-useless-promise-resolve-reject
async function uselessResolve(): Promise<number> {
	return Promise.resolve(42);
}

// unicorn/no-useless-spread
const uselessSpread = [...[1, 2, 3]];

// unicorn/no-typeof-undefined
if (typeof foo === "undefined") {
	console.log("undefined");
}

// unicorn/no-zero-fractions
const zeroFraction = 1.0;

// unicorn/prefer-add-event-listener
document.onclick = (): void => {};

// unicorn/prefer-array-find
const found = [1, 2, 3].filter((x) => x === 2)[0];

// unicorn/prefer-array-flat
const concatFlat = [].concat(
	...[
		[1, 2],
		[3, 4],
	],
);

// unicorn/prefer-array-some
const hasTwo = [1, 2, 3].filter((x) => x === 2).length > 0;

// unicorn/prefer-bigint-literals
BigInt("123");

// unicorn/prefer-blob-reading-methods
const reader = new FileReader();
const blob = new Blob();
reader.readAsText(blob);

// unicorn/prefer-class-fields
class ClassFields {
	constructor() {
		this.value = 1;
	}
	value: number;
}

// unicorn/prefer-code-point
"abc".charCodeAt(0);

// unicorn/prefer-default-parameters
function defaultParams(value?: number): number {
	value = value ?? 10;

	return value;
}

// unicorn/prefer-dom-node-append
const parent = document.createElement("div");
const child = document.createElement("span");
parent.appendChild(child);

// unicorn/prefer-dom-node-dataset
const element = document.createElement("div");
element.setAttribute("data-value", "test");

// unicorn/prefer-dom-node-remove
child.parentNode?.removeChild(child);

// unicorn/prefer-dom-node-text-content
const text = element.innerText;

// unicorn/prefer-includes
const includesCheck = [1, 2, 3].indexOf(2) !== -1;

// unicorn/prefer-json-parse-buffer
const buffer = Buffer.from('{"key": "value"}');
JSON.parse(buffer.toString());

// unicorn/prefer-keyboard-event-key
document.addEventListener("keydown", (event) => {
	console.log(event.keyCode);
});

// unicorn/prefer-logical-operator-over-ternary
const logicalValue = foo ? foo : bar;

// unicorn/prefer-math-min-max
const clampedValue = foo < 0 ? 0 : foo;

// unicorn/prefer-math-trunc
const truncated = foo >= 0 ? Math.floor(1.5) : Math.ceil(1.5);

// unicorn/prefer-modern-dom-apis
element.insertAdjacentElement("beforebegin", child);

// unicorn/prefer-modern-math-apis
const log10 = Math.log(100) * Math.LOG10E;

// unicorn/prefer-native-coercion-functions
const toBoolean = (value: unknown): boolean => Boolean(value);

// unicorn/prefer-negative-index
const lastItem = sliceArray.slice(sliceArray.length - 1)[0];

// unicorn/prefer-object-from-entries
const entries: Array<[string, number]> = [
	["a", 1],
	["b", 2],
];
const fromEntries = entries.reduce(
	(acc, [key, value]) => {
		acc[key] = value;

		return acc;
	},
	{} as Record<string, number>,
);

// unicorn/prefer-reflect-apply
const func = function (): void {};
func.apply(null, []);

// unicorn/prefer-regexp-test
const regexMatch = /test/.exec("test string");

// unicorn/prefer-set-has
const lookupArray = [1, 2, 3, 4, 5];
lookupArray.includes(3);
lookupArray.includes(4);
lookupArray.includes(5);

// unicorn/prefer-set-size
const uniqueSet = new Set([1, 2, 2, 3]);
const uniqueCount = [...uniqueSet].length;

// unicorn/prefer-single-call
element.classList.add("class1");
element.classList.add("class2");

// unicorn/prefer-spread
const arrayFrom = Array.from("abc");

// unicorn/prefer-string-raw
const rawString = "line1\\nline2";

// unicorn/prefer-string-replace-all
const replaced = "a-b-c".replace(/-/g, "_");

// unicorn/prefer-string-starts-ends-with
const startsWithA = "abc"[0] === "a";

// unicorn/prefer-structured-clone
const cloned = JSON.parse(JSON.stringify({ a: 1 }));

// unicorn/prefer-switch
const switchValue = 1;
if (switchValue === 1) {
	console.log("one");
} else if (switchValue === 2) {
	console.log("two");
} else if (switchValue === 3) {
	console.log("three");
}

// unicorn/prefer-type-error
function typeCheck(value: unknown): void {
	if (typeof value !== "string") {
		throw new Error("Expected string");
	}
}

// unicorn/relative-url-style
const relativeUrl = new URL("./path", "https://example.com");

// unicorn/require-array-join-separator
const joined = [1, 2, 3].join();

// unicorn/require-post-message-target-origin
window.postMessage("message");

// unicorn/text-encoding-identifier-case
const decoded = new TextDecoder("utf-8");

// unicorn/no-process-exit
process.exit(1);

export {
	badRegex,
	obj,
	prop1,
	arr,
	outer,
	escapeCase,
	path,
	AccessorRecursion,
	numbers,
	reversed,
	sorted,
	awaitMember,
	awaitInPromiseAll,
	hexEscape,
	immediatelyMutated,
	deepArray,
	foo,
	bar,
	newArray,
	newBuffer,
	objectDefault,
	ThisAssignment,
	flatArray,
	spliceArray,
	unnecessaryAwait,
	sliceArray,
	fourth,
	iife,
	unusedProps,
	emptySet,
	fallbackSpread,
	lengthCheck,
	uselessResolve,
	uselessSpread,
	zeroFraction,
	found,
	concatFlat,
	hasTwo,
	reader,
	ClassFields,
	defaultParams,
	parent,
	element,
	text,
	includesCheck,
	buffer,
	logicalValue,
	clampedValue,
	truncated,
	log10,
	toBoolean,
	lastItem,
	fromEntries,
	func,
	regexMatch,
	lookupArray,
	uniqueCount,
	arrayFrom,
	rawString,
	replaced,
	startsWithA,
	cloned,
	switchValue,
	typeCheck,
	relativeUrl,
	joined,
	decoded,
	date,
	clonedDate,
	emptySpread,
	handler,
};
