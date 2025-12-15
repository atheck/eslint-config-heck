// ESLint TypeScript Rules Test File
// Each section contains code that triggers the corresponding rule

// @typescript-eslint/await-thenable
async function awaitNonThenable(): Promise<void> {
	await 42;
}

// @typescript-eslint/ban-tslint-comment
// tslint:disable-next-line

// @typescript-eslint/class-literal-property-style
class LiteralStyle {
	get value(): string {
		return "literal";
	}
}

// @typescript-eslint/class-methods-use-this
class NoThisUsage {
	method(): number {
		return 42;
	}
}

// @typescript-eslint/consistent-generic-constructors
const map: Map<string, number> = new Map();

// @typescript-eslint/consistent-indexed-object-style
type IndexedType = {
	[key: string]: number;
};

// @typescript-eslint/consistent-type-assertions
const assertion = <string>"value";

// @typescript-eslint/explicit-function-return-type
const noReturnType = () => {
	return 1;
};

// @typescript-eslint/method-signature-style
interface MethodStyle {
	method(arg: string): void;
}

// @typescript-eslint/no-base-to-string
class NoToString {}
const noToStringInstance = new NoToString();
const stringified = `${noToStringInstance}`;

// @typescript-eslint/no-confusing-non-null-assertion
interface ConfusingAssertion {
	prop?: string;
}
const confusing: ConfusingAssertion = {};
const isEqual = confusing.prop! === "value";

// @typescript-eslint/no-deprecated
/** @deprecated Use newFunction instead */
function oldFunction(): void {}
oldFunction();

// @typescript-eslint/no-duplicate-enum-values
enum DuplicateValues {
	A = 1,
	B = 1,
}

// @typescript-eslint/no-duplicate-type-constituents
type DuplicateUnion = string | string;

// @typescript-eslint/no-dynamic-delete
const dynamicObj: Record<string, number> = { a: 1 };
const key = "a";
delete dynamicObj[key];

// @typescript-eslint/no-extraneous-class
class OnlyStatic {
	static value = 1;
}

// @typescript-eslint/no-implied-eval
setTimeout("console.log('eval')", 100);

// @typescript-eslint/no-invalid-this
function invalidThisContext(): void {
	console.log(this);
}

// @typescript-eslint/no-loop-func
const funcs: Array<() => number> = [];
for (var i = 0; i < 10; i++) {
	funcs.push(() => i);
}

// @typescript-eslint/no-misused-spread
class SpreadClass {
	value = 1;
}
const spreadInstance = new SpreadClass();
const spreadObj = { ...spreadInstance };

// @typescript-eslint/no-non-null-asserted-nullish-coalescing
const nullishValue: string | null = null;
const result = nullishValue! ?? "default";

// @typescript-eslint/no-redundant-type-constituents
type RedundantUnion = string | unknown;

// @typescript-eslint/no-shadow
const shadowedVar = 1;
function shadowFunction(): void {
	const shadowedVar = 2;
	console.log(shadowedVar);
}

// @typescript-eslint/no-unnecessary-boolean-literal-compare
const boolValue = true;
if (boolValue === true) {
	console.log("true");
}

// @typescript-eslint/no-unnecessary-condition
const alwaysTruthy = "string";
if (alwaysTruthy) {
	console.log("always true");
}

// @typescript-eslint/no-unnecessary-parameter-property-assignment
class UnnecessaryAssignment {
	constructor(public value: number) {
		this.value = value;
	}
}

// @typescript-eslint/no-unnecessary-qualifier
namespace UnnecessaryQualifier {
	export const value = 1;
	export const other = UnnecessaryQualifier.value;
}

// @typescript-eslint/no-unnecessary-template-expression
const simpleString = "value";
const templateString = `${simpleString}`;

// @typescript-eslint/no-unnecessary-type-arguments
function genericFunc<T = string>(): T {
	return "" as T;
}
genericFunc<string>();

// @typescript-eslint/no-unnecessary-type-assertion
const definiteString = "value";
const asserted = definiteString as string;

// @typescript-eslint/no-unnecessary-type-conversion
const numberValue = 42;
const converted = Number(numberValue);

// @typescript-eslint/no-unnecessary-type-parameters
function unnecessaryTypeParam<T>(): void {
	console.log("no T usage");
}

// @typescript-eslint/no-unsafe-argument
function acceptsString(str: string): void {
	console.log(str);
}
const anyValue: any = "value";
acceptsString(anyValue);

// @typescript-eslint/no-unsafe-assignment
const unsafeAssign: string = anyValue;

// @typescript-eslint/no-unsafe-call
anyValue();

// @typescript-eslint/no-unsafe-enum-comparison
enum StringEnum {
	A = "a",
}
const enumValue = StringEnum.A;
if (enumValue === "a") {
	console.log("match");
}

// @typescript-eslint/no-unsafe-member-access
const memberAccess = anyValue.property;

// @typescript-eslint/no-unsafe-return
function unsafeReturn(): string {
	return anyValue;
}

// @typescript-eslint/no-unsafe-type-assertion
const unsafeAssertion = anyValue as string;

// @typescript-eslint/no-unsafe-unary-minus
const anyNumber: any = 5;
const negated = -anyNumber;

// @typescript-eslint/prefer-destructuring
const destructArray = [1, 2, 3];
const firstElement = destructArray[0];

// @typescript-eslint/prefer-nullish-coalescing
const nullableString: string | null = null;
const defaulted = nullableString || "default";

// @typescript-eslint/prefer-promise-reject-errors
async function rejectWithString(): Promise<void> {
	return Promise.reject("error");
}

// @typescript-eslint/prefer-reduce-type-parameter
const reduced = [1, 2, 3].reduce((acc, val) => {
	acc.push(val);

	return acc;
}, [] as number[]);

// @typescript-eslint/prefer-regexp-exec
const regexString = "test string";
const match = regexString.match(/test/);

// @typescript-eslint/prefer-return-this-type
class ReturnThisType {
	setValue(): ReturnThisType {
		return this;
	}
}

// @typescript-eslint/prefer-string-starts-ends-with
const testString = "hello world";
const startsWithH = testString[0] === "h";

// @typescript-eslint/promise-function-async
function returnsPromise(): Promise<void> {
	return Promise.resolve();
}

// @typescript-eslint/related-getter-setter-pairs
class MismatchedAccessors {
	private _value = 0;
	get value(): number {
		return this._value;
	}
	set value(val: string) {
		this._value = Number(val);
	}
}

// @typescript-eslint/restrict-plus-operands
const mixedAdd = "string" + 123;

// @typescript-eslint/triple-slash-reference
/// <reference path="./types.d.ts" />

// @typescript-eslint/unbound-method
class MethodClass {
	method(): void {
		console.log(this);
	}
}
const unboundMethod = new MethodClass().method;

// @typescript-eslint/use-unknown-in-catch-callback-variable
Promise.reject("error").catch((error: any) => {
	console.log(error);
});

// @typescript-eslint/no-useless-default-assignment
function uselessDefaultAssignment(value: string | undefined = undefined): string {
	return value ?? "fallback";
}
uselessDefaultAssignment("provided");

export {
	awaitNonThenable,
	LiteralStyle,
	NoThisUsage,
	map,
	assertion,
	noReturnType,
	NoToString,
	stringified,
	confusing,
	isEqual,
	oldFunction,
	DuplicateValues,
	dynamicObj,
	OnlyStatic,
	invalidThisContext,
	funcs,
	SpreadClass,
	spreadObj,
	result,
	shadowedVar,
	shadowFunction,
	boolValue,
	alwaysTruthy,
	UnnecessaryAssignment,
	UnnecessaryQualifier,
	templateString,
	genericFunc,
	asserted,
	converted,
	unnecessaryTypeParam,
	acceptsString,
	unsafeAssign,
	memberAccess,
	unsafeReturn,
	unsafeAssertion,
	negated,
	destructArray,
	defaulted,
	rejectWithString,
	reduced,
	match,
	ReturnThisType,
	testString,
	startsWithH,
	returnsPromise,
	MismatchedAccessors,
	mixedAdd,
	MethodClass,
	unboundMethod,
	uselessDefaultAssignment,
};
