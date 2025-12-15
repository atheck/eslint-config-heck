// Biome Rules Test File (Non-JSX)
// Each section contains code that triggers the corresponding rule

// ============================================
// COMPLEXITY RULES
// ============================================

// complexity/noAdjacentSpacesInRegex
const adjacentSpaces = /foo  bar/;

// complexity/noArguments
function useArguments(): void {
	console.log(arguments);
}

// complexity/noBannedTypes
type BannedObject = Object;
type BannedFunction = Function;
type BannedBoolean = Boolean;

// complexity/noCommaOperator
let commaResult = (1, 2, 3);

// complexity/noEmptyTypeParameters
function emptyTypeParams<>(): void {}

// complexity/noExcessiveCognitiveComplexity
function complexFunction(a: number, b: number, c: number): number {
	if (a > 0) {
		if (b > 0) {
			if (c > 0) {
				for (let i = 0; i < 10; i++) {
					if (i % 2 === 0) {
						while (a > 0) {
							a--;
							if (a === 5) {
								break;
							}
						}
					}
				}
			}
		}
	}

	return a + b + c;
}

// complexity/noExtraBooleanCast
const extraBoolCast = !!!true;

// complexity/noFlatMapIdentity
const flatMapIdentity = [[1, 2], [3, 4]].flatMap((x) => x);

// complexity/noForEach
[1, 2, 3].forEach((item) => console.log(item));

// complexity/noImplicitCoercions
const implicitString = "" + 42;

// complexity/noStaticOnlyClass
class StaticOnly {
	static value = 1;
	static method(): number {
		return StaticOnly.value;
	}
}

// complexity/noThisInStatic
class ThisInStatic {
	static value = 1;
	static method(): number {
		return this.value;
	}
}

// complexity/noUselessCatch
try {
	throw new Error("error");
} catch (e) {
	throw e;
}

// complexity/noUselessConstructor
class UselessConstructor {
	constructor() {}
}

// complexity/noUselessContinue
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		continue;
	} else {
		continue;
	}
}

// complexity/noUselessEmptyExport
export {};

// complexity/noUselessEscapeInRegex
const uselessEscape = /\a/;

// complexity/noUselessLabel
uselessLabel: for (let i = 0; i < 10; i++) {
	break uselessLabel;
}

// complexity/noUselessLoneBlockStatements
{
	const blockVar = 1;
	console.log(blockVar);
}

// complexity/noUselessRename
import { useState as useState } from "react";

// complexity/noUselessStringConcat
const uselessConcat = "a" + "b" + "c";

// complexity/noUselessStringRaw
const uselessRaw = String.raw`no special chars`;

// complexity/noUselessSwitchCase
const switchVal = 1;
switch (switchVal) {
	case 1:
		break;
	default:
		break;
}

// complexity/noUselessTernary
const uselessTernary = true ? true : false;

// complexity/noUselessThisAlias
class UselessThisAlias {
	method(): void {
		const self = this;
		console.log(self);
	}
}

// complexity/noUselessTypeConstraint
function uselessConstraint<T extends unknown>(): void {}

// complexity/noUselessUndefinedInitialization
let uselessUndefined: string | undefined = undefined;

// complexity/noVoid
void 0;

// complexity/useArrowFunction
const arrowFunc = function () {
	return 1;
};

// complexity/useDateNow
const timestamp = new Date().getTime();

// complexity/useFlatMap
const flatMapped = [1, 2, 3].map((x) => [x, x]).flat();

// complexity/useLiteralKeys
const obj = { ["computed"]: 1 };

// complexity/useNumericLiterals
const octal = parseInt("777", 8);

// complexity/useOptionalChain
const optionalObj: { a?: { b?: number } } = {};
const optionalValue = optionalObj && optionalObj.a && optionalObj.a.b;

// complexity/useRegexLiterals
const regexFromString = new RegExp("^test$");

// complexity/useSimpleNumberKeys
const simpleKeys = { 1: "one", 2: "two" };

// complexity/useWhile
for (; true; ) {
	break;
}

// ============================================
// CORRECTNESS RULES
// ============================================

// correctness/noConstantCondition
if (true) {
	console.log("always");
}

// correctness/noConstantMathMinMaxClamp
const clamped = Math.min(Math.max(5, 0), 10);

// correctness/noConstAssign
const constVar = 1;
// constVar = 2; // Would cause runtime error

// correctness/noConstructorReturn
class ConstructorReturn {
	constructor() {
		return {};
	}
}

// correctness/noEmptyCharacterClassInRegex
const emptyCharClass = /[]/;

// correctness/noEmptyPattern
const { } = { a: 1 };

// correctness/noGlobalObjectCalls
const mathResult = Math();

// correctness/noInnerDeclarations
if (true) {
	function innerFunc(): void {}
}

// correctness/noInvalidBuiltinInstantiation
const symbolInstance = new Symbol("test");

// correctness/noInvalidConstructorSuper
class NoSuperCall extends Error {
	constructor() {
		// Missing super()
	}
}

// correctness/noInvalidUseBeforeDeclaration
console.log(beforeDeclaration);
const beforeDeclaration = 1;

// correctness/noNonoctalDecimalEscape
const nonoctalEscape = "\8";

// correctness/noPrecisionLoss
const precisionLoss = 9007199254740993;

// correctness/noSelfAssign
let selfAssign = 1;
selfAssign = selfAssign;

// correctness/noSetterReturn
class SetterReturn {
	set value(val: number) {
		return val;
	}
}

// correctness/noStringCaseMismatch
const str = "Hello";
if (str.toUpperCase() === "hello") {
	console.log("match");
}

// correctness/noSwitchDeclarations
switch (1) {
	case 1:
		const switchConst = 1;
		break;
}

// correctness/noUnreachable
function unreachable(): number {
	return 1;
	console.log("unreachable");
}

// correctness/noUnreachableSuper
class UnreachableSuper extends Error {
	constructor() {
		return;
		super();
	}
}

// correctness/noUnsafeFinally
function unsafeFinally(): number {
	try {
		return 1;
	} finally {
		return 2;
	}
}

// correctness/noUnsafeOptionalChaining
const unsafeOptional = optionalObj?.a + 1;

// correctness/noUnusedFunctionParameters
function unusedParams(used: number, unused: number): number {
	return used;
}

// correctness/noUnusedImports
import { unused } from "node:path";

// correctness/noUnusedLabels
unusedLabel: console.log("labeled");

// correctness/noUnusedPrivateClassMembers
class UnusedPrivate {
	#unused = 1;
	used = 2;
}

// correctness/noUnusedVariables
const unusedVar = 1;

// correctness/noVoidTypeReturn
function voidReturn(): void {
	return undefined;
}

// correctness/useIsNan
if (NaN === NaN) {
	console.log("nan");
}

// correctness/useParseIntRadix
const parsed = parseInt("10");

// correctness/useValidForDirection
for (let i = 0; i < 10; i--) {
	console.log(i);
}

// correctness/useValidTypeof
if (typeof str === "strnig") {
	console.log("typo");
}

// correctness/useYield
function* noYield(): Generator {
	return 1;
}

// ============================================
// NURSERY RULES
// ============================================

// nursery/noDuplicatedSpreadProps (no good example for ts file)

// nursery/noFloatingPromises
async function floatingPromise(): Promise<void> {
	Promise.resolve(1);
}

// nursery/noForIn
for (const key in obj) {
	console.log(key);
}

// nursery/noImportCycles
// Would require circular imports

// nursery/noMisusedPromises
async function misusedPromise(): Promise<boolean> {
	return true;
}
if (misusedPromise()) {
	console.log("misused");
}

// nursery/noMultiStr
const multiStr = "line1\
line2";

// nursery/noProto
const protoAccess = obj.__proto__;

// nursery/noUnusedExpressions
"unused string";

// nursery/noUselessCatchBinding
try {
	throw new Error();
} catch (e) {
	throw new Error("new error");
}

// nursery/noUselessUndefined
function returnsUndefined(): undefined {
	return undefined;
}

// nursery/useArraySortCompare
const sortedWithoutCompare = [3, 1, 2].sort();

// nursery/useConsistentArrowReturn
const inconsistentArrow = (x: number) => {
	return x * 2;
};

// nursery/useExhaustiveSwitchCases
type SwitchType = "a" | "b" | "c";
const switchType: SwitchType = "a";
switch (switchType) {
	case "a":
		break;
	case "b":
		break;
	// Missing 'c'
}

// nursery/useAwaitThenable
async function awaitThenable(): Promise<void> {
	const thenable = { then: (resolve: (value: number) => void) => resolve(42) };
	await thenable;
}

// nursery/useRegexpExec
const regexpExecString = "test string";
const regexpMatch = regexpExecString.match(/test/);

// nursery/useSpread
const copied = Object.assign({}, obj);

// ============================================
// PERFORMANCE RULES
// ============================================

// performance/noAccumulatingSpread
const accumulatingSpread = [1, 2, 3].reduce(
	(acc, item) => ({ ...acc, [item]: item }),
	{},
);

// performance/noBarrelFile
// export * from './module';

// performance/noDelete
delete obj.computed;

// performance/noNamespaceImport
import * as allPath from "node:path";

// performance/noReExportAll
// export * from './module';

// performance/useTopLevelRegex
function regexInFunc(): RegExp {
	return /test/;
}

// ============================================
// SECURITY RULES
// ============================================

// security/noGlobalEval
eval("console.log('eval')");

// ============================================
// STYLE RULES
// ============================================

// style/noCommonJs
const commonjsRequire = require("node:fs");

// style/noDefaultExport
export default function defaultExport(): void {}

// style/noEnum
enum MyEnum {
	A,
	B,
}

// style/noExportedImports
export { useState };

// style/noInferrableTypes
const inferrable: number = 42;

// style/noNamespace
namespace MyNamespace {
	export const value = 1;
}

// style/noNegationElse
if (!true) {
	console.log("false");
} else {
	console.log("true");
}

// style/noNestedTernary
const nestedTernary = true ? (false ? 1 : 2) : 3;

// style/noNonNullAssertion
const maybeNull: string | null = null;
const notNull = maybeNull!;

// style/noParameterAssign
function paramAssign(value: number): number {
	value = value + 1;

	return value;
}

// style/noProcessEnv
const envVar = process.env.NODE_ENV;

// style/noShoutyConstants
const SHOUTYCONSTANT = "value";
console.log(SHOUTYCONSTANT);

// style/noSubstr
const substring = "hello".substr(0, 2);

// style/noUnusedTemplateLiteral
const unusedTemplate = `plain string`;

// style/noUselessElse
function uselessElse(value: boolean): number {
	if (value) {
		return 1;
	} else {
		return 2;
	}
}

// style/noYodaExpression
if (1 === switchVal) {
	console.log("yoda");
}

// style/useArrayLiterals
const arrayConstructor = new Array(1, 2, 3);

// style/useAsConstAssertion
const asConst = { a: 1 } as { a: 1 };

// style/useAtIndex
const atIndex = [1, 2, 3].slice(-1)[0];

// style/useBlockStatements
if (true) console.log("no block");

// style/useCollapsedElseIf
if (true) {
	console.log("if");
} else {
	if (false) {
		console.log("else if");
	}
}

// style/useCollapsedIf
if (true) {
	if (false) {
		console.log("nested if");
	}
}

// style/useConsistentArrayType
const arrayType: Array<string> = [];

// style/useConsistentBuiltinInstantiation
const boolInstance = new Boolean(true);

// style/useConsistentMemberAccessibility
class MemberAccessibility {
	value = 1;
	method(): void {}
}

// style/useConsistentObjectDefinitions
const objectDef = { value: 1, method: function (): void {} };

// style/useConsistentTypeDefinitions
interface InterfaceType {
	value: number;
}

// style/useConst
let shouldBeConst = 1;
console.log(shouldBeConst);

// style/useDefaultParameterLast
function defaultParamFirst(a = 1, b: number): number {
	return a + b;
}

// style/useEnumInitializers
enum UninitializedEnum {
	A,
	B,
}

// style/useExplicitLengthCheck
const hasLength = [1, 2, 3].length;
if (hasLength) {
	console.log("has length");
}

// style/useExponentiationOperator
const power = Math.pow(2, 3);

// style/useExportsLast
export const earlyExport = 1;
const afterExport = 2;

// style/useExportType
export { BannedObject };

// style/useForOf
const forOfArray = [1, 2, 3];
for (let i = 0; i < forOfArray.length; i++) {
	console.log(forOfArray[i]);
}

// style/useGroupedAccessorPairs
class GroupedAccessors {
	private _value = 0;
	get value(): number {
		return this._value;
	}
	otherMethod(): void {}
	set value(val: number) {
		this._value = val;
	}
}

// style/useImportType
import { ReactElement } from "react";

// style/useLiteralEnumMembers
enum ComputedEnum {
	A = 1 + 1,
}

// style/useNamingConvention
type t = number; // Should be TNumber

// style/useNodeAssertStrict
import { strict } from "node:assert";

// style/useNodejsImportProtocol
import { readFile } from "fs";

// style/useNumberNamespace
const maxSafe = Number.MAX_SAFE_INTEGER;

// style/useNumericSeparators
const bigNum = 1000000;

// style/useObjectSpread
const objectAssign = Object.assign({}, obj, { newProp: 1 });

// style/useReadonlyClassProperties
class ReadonlyProps {
	value = 1;
}

// style/useSelfClosingElements
// See biome.tsx for JSX

// style/useShorthandAssign
let shorthand = 1;
shorthand = shorthand + 1;

// style/useShorthandFunctionType
interface FunctionInterface {
	(): void;
}

// style/useSingleVarDeclarator
let multiVar1, multiVar2;

// style/useSymbolDescription
const symbolNoDesc = Symbol();

// style/useTemplate
const templateConcat = "Hello " + "World";

// style/useThrowNewError
throw Error("error without new");

// style/useThrowOnlyError
throw "string error";

// style/useTrimStartEnd
const trimmed = "  hello  ".trimLeft();

// style/useUnifiedTypeSignatures
interface UnifiedSignatures {
	method(a: string): void;
	method(a: number): void;
}

// ============================================
// SUSPICIOUS RULES
// ============================================

// suspicious/noAlert
alert("alert");

// suspicious/noApproximativeNumericConstant
const approxPi = 3.14159265;

// suspicious/noAssignInExpressions
let assignInExpr: number;
if ((assignInExpr = 1)) {
	console.log(assignInExpr);
}

// suspicious/noAsyncPromiseExecutor
const asyncExecutor = new Promise(async (resolve) => {
	resolve(await Promise.resolve(1));
});

// suspicious/noBitwiseOperators
const bitwiseResult = 1 | 2;

// suspicious/noCatchAssign
try {
	throw new Error();
} catch (e) {
	e = new Error("reassigned");
}

// suspicious/noClassAssign
class ClassToAssign {}
// ClassToAssign = function() {};

// suspicious/noCompareNegZero
if (1 === -0) {
	console.log("neg zero");
}

// suspicious/noConfusingLabels
switch (1) {
	case 1:
		break;
}

// suspicious/noConfusingVoidType
type VoidUnion = void | string;

// suspicious/noConsole
console.log("console");

// suspicious/noConstantBinaryExpressions
const constantBinary = 1 === 1;

// suspicious/noConstEnum
const enum ConstEnum {
	A,
	B,
}

// suspicious/noControlCharactersInRegex
const controlCharRegex = /\x00/;

// suspicious/noDebugger
debugger;

// suspicious/noDocumentCookie
document.cookie = "test=1";

// suspicious/noDoubleEquals
if (1 == "1") {
	console.log("loose equality");
}

// suspicious/noDuplicateCase
switch (1) {
	case 1:
		break;
	case 1:
		break;
}

// suspicious/noDuplicateClassMembers
class DuplicateMembers {
	method(): void {}
	method(): void {}
}

// suspicious/noDuplicateElseIf
if (true) {
	console.log("first");
} else if (true) {
	console.log("duplicate");
} else if (true) {
	console.log("duplicate again");
}

// suspicious/noDuplicateObjectKeys
const duplicateKeys = { a: 1, a: 2 };

// suspicious/noDuplicateParameters
function duplicateParams(a: number, a: number): number {
	return a;
}

// suspicious/noEmptyBlockStatements
if (true) {
}

// suspicious/noEvolvingTypes
let evolvingType = null;
evolvingType = 1;
evolvingType = "string";

// suspicious/noExplicitAny
const explicitAny: any = 1;

// suspicious/noExtraNonNullAssertion
const extraNonNull = maybeNull!!;

// suspicious/noFallthroughSwitchClause
switch (1) {
	case 1:
		console.log("fallthrough");
	case 2:
		break;
}

// suspicious/noFunctionAssign
function funcToAssign(): void {}
// funcToAssign = function() {};

// suspicious/noGlobalAssign
// Object = {};

// suspicious/noGlobalIsFinite
isFinite(1);

// suspicious/noGlobalIsNan
isNaN(1);

// suspicious/noImplicitAnyLet
let implicitAny;

// suspicious/noImportAssign
// useState = () => {};

// suspicious/noIrregularWhitespace
const irregularWhitespace = " ";

// suspicious/noLabelVar
const labelVarName = 1;
labelVarName: console.log("label");

// suspicious/noMisleadingCharacterClass
const misleadingCharClass = /[👍]/;

// suspicious/noMisleadingInstantiator
class Misleading {
	new(): Misleading {
		return new Misleading();
	}
}

// suspicious/noMisplacedAssertion
console.log("test");
expect(true).toBe(true);

// suspicious/noMisrefactoredShorthandAssign
let misrefactored = 1;
misrefactored = misrefactored + misrefactored;

// suspicious/noNonNullAssertedOptionalChain
const nonNullOptional = optionalObj?.a!;

// suspicious/noOctalEscape
const octalEscape = "\251";

// suspicious/noPrototypeBuiltins
obj.hasOwnProperty("prop");

// suspicious/noRedeclare
var redeclared = 1;
var redeclared = 2;

// suspicious/noRedundantUseStrict
"use strict";
function strictFunc(): void {
	"use strict";
}

// suspicious/noSelfCompare
if (switchVal === switchVal) {
	console.log("self compare");
}

// suspicious/noShadowRestrictedNames
const undefined = 1;

// suspicious/noSparseArray
const sparseArray = [1, , 3];

// suspicious/noSuspiciousSemicolonInJsx
// See biome.tsx

// suspicious/noTemplateCurlyInString
const templateCurly = "${value}";

// suspicious/noThenProperty
const thenProperty = { then: () => {} };

// suspicious/noTsIgnore
// @ts-ignore
const ignored = 1;

// suspicious/noUnassignedVariables
let unassignedLater: number;
console.log(unassignedLater);

// suspicious/noUnsafeDeclarationMerging
interface UnsafeMerge {}
class UnsafeMerge {}

// suspicious/noUnsafeNegation
if (!1 in [1, 2, 3]) {
	console.log("unsafe negation");
}

// suspicious/noUselessEscapeInString
const uselessStringEscape = "\"escaped\"";

// suspicious/noUselessRegexBackrefs
const uselessBackref = /(\1)/;

// suspicious/noVar
var varDeclaration = 1;

// suspicious/noWith
with (obj) {
	console.log("with");
}

// suspicious/useAdjacentOverloadSignatures
interface AdjacentOverloads {
	method(a: string): void;
	other(): void;
	method(a: number): void;
}

// suspicious/useDefaultSwitchClauseLast
switch (1) {
	default:
		break;
	case 1:
		break;
}

// suspicious/useErrorMessage
throw new Error();

// suspicious/useGetterReturn
class NoGetterReturn {
	get value(): number {
		console.log("no return");
	}
}

// suspicious/useGuardForIn
for (const key in obj) {
	console.log(key);
}

// suspicious/useIsArray
if (forOfArray instanceof Array) {
	console.log("is array");
}

// suspicious/useNamespaceKeyword
module OldModule {}

// suspicious/useNumberToFixedDigitsArgument
const fixed = (1.234).toFixed();

// suspicious/useStrictMode
// At top of file without "use strict"

export {
	adjacentSpaces,
	useArguments,
	commaResult,
	complexFunction,
	extraBoolCast,
	flatMapIdentity,
	StaticOnly,
	ThisInStatic,
	UselessConstructor,
	obj,
	switchVal,
	uselessTernary,
	UselessThisAlias,
	arrowFunc,
	timestamp,
	flatMapped,
	optionalObj,
	regexFromString,
	simpleKeys,
	constVar,
	ConstructorReturn,
	emptyCharClass,
	mathResult,
	beforeDeclaration,
	nonoctalEscape,
	precisionLoss,
	selfAssign,
	SetterReturn,
	str,
	unreachable,
	UnreachableSuper,
	unsafeFinally,
	unsafeOptional,
	unusedParams,
	UnusedPrivate,
	unusedVar,
	voidReturn,
	parsed,
	noYield,
	floatingPromise,
	misusedPromise,
	multiStr,
	protoAccess,
	returnsUndefined,
	sortedWithoutCompare,
	inconsistentArrow,
	switchType,
	copied,
	accumulatingSpread,
	regexInFunc,
	commonjsRequire,
	MyEnum,
	inferrable,
	MyNamespace,
	nestedTernary,
	notNull,
	paramAssign,
	envVar,
	substring,
	unusedTemplate,
	uselessElse,
	arrayConstructor,
	asConst,
	atIndex,
	arrayType,
	boolInstance,
	MemberAccessibility,
	objectDef,
	shouldBeConst,
	defaultParamFirst,
	UninitializedEnum,
	hasLength,
	power,
	earlyExport,
	afterExport,
	forOfArray,
	GroupedAccessors,
	ComputedEnum,
	maxSafe,
	bigNum,
	objectAssign,
	ReadonlyProps,
	shorthand,
	multiVar1,
	multiVar2,
	symbolNoDesc,
	templateConcat,
	trimmed,
	approxPi,
	assignInExpr,
	asyncExecutor,
	bitwiseResult,
	constantBinary,
	ConstEnum,
	controlCharRegex,
	duplicateKeys,
	duplicateParams,
	evolvingType,
	explicitAny,
	extraNonNull,
	implicitAny,
	irregularWhitespace,
	labelVarName,
	misleadingCharClass,
	Misleading,
	misrefactored,
	nonNullOptional,
	octalEscape,
	redeclared,
	strictFunc,
	sparseArray,
	templateCurly,
	thenProperty,
	ignored,
	unassignedLater,
	UnsafeMerge,
	uselessStringEscape,
	uselessBackref,
	varDeclaration,
	fixed,
	allPath,
	strict,
	readFile,
	scriptUrl,
	awaitThenable,
	regexpExecString,
	regexpMatch,
};
