// adjacent-overload-signatures
interface AdjacentOverloadSignatures {
	foo(s: string): void;
	bar(): void;
	foo(n: number): void;
}

// array-type
const arrayType: Array<string> = [];

// await-thenable
const notThenable = () => "value";

await notThenable();

// ban-ts-comment
// @ts-expect-error

// class-literal-property-style
class LiteralPropertyStyle {
	public static get myField1() {
		return 1;
	}

	private get ["myField2"]() {
		return "hello world";
	}
}

// consistent-indexed-object-style
type InconsistentIndexedObject = {
	[key: string]: unknown;
};

// consistent-type-assertions
let inconsistentTypeAssertion = <string>"hello";

// explicit-function-return-type
const noReturnType1 = () => "test";
const noReturnType2 = [1, 2].map((i) => i + 1);

// member-delimiter-style
type WithSemicolons = {
	key1: string;
	key2: number;
};

// method-signature-style
interface T1 {
	func(arg: string): number;
}

// promise-function-async
const promiseThrows = async function (): Promise<string> {
	if (notThenable) {
		throw new Error("");
	}

	return Promise.resolve("");
};

type SomeType = {
	prop: number;
};

// no-redeclare
interface Merge {
	foo: () => void;
}

class Merge {
	public foo(): void {
		// blank
	}
}

// no-redundant-type-constituents
export type Redundant = any | "string";

// no-useless-empty-export
export {};

// naming-convention
// ignore destructured

const WrongNaming = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	toJSON() {
		// blank
	},
};

const { toJSON } = WrongNaming;

toJSON();

// no-duplicate-type-constituents
type Union = "A" | "A";
type Intersection = { a: string } & { a: string };

// no-unsafe-declaration-merging
interface Merging {}
class Merging {}

// no-unsafe-enum-comparison
enum UnsafeEnum {
	Apple,
	Banana,
}

const enumValue: UnsafeEnum = UnsafeEnum.Apple;

enumValue === 1;

const destructure = { a: 1, b: 2 };

// prefer-destructuring
const a = destructure.a;
const { b } = destructure;

// switch-exhaustiveness-check
let value = 1;

switch (value) {
	case 0:
		break;
}

type SwitchType = "a" | "b";

let switchValue: SwitchType = "a";

switch (switchValue) {
	case "a":
		break;

	case "b":
		break;

	default:
		break;
}

interface EmptyType<> {
	foo: Array<number>;
}

// prefer-find
[].filter((i) => i === 1)[0];

// use-unknown-in-catch-callback-variable
Promise.reject(new Error("error")).catch((ex) => console.error(ex));
