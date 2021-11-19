// adjacent-overload-signatures
interface AdjacentOverloadSignatures {
    foo (s: string): void,
    bar (): void,
    foo (n: number): void,
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
    public static get myField1 () {
        return 1;
    }

    private get ["myField2"] () {
        return "hello world";
    }
}

// consistent-indexed-object-style
type InconsistentIndexedObject = {
    [key: string]: unknown,
};

// consistent-type-assertions
let inconsistentTypeAssertion = <string>"hello";

// explicit-function-return-type
const noReturnType1 = () => "test";
const noReturnType2 = [1, 2].map((i): number => i + 1);

// member-delimiter-style
type WithSemicolons = {
    key1: string;
    key2: number
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
    prop: number,
};