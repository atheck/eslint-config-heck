// better-regex
const regex = /[0-9]\.[a-zA-Z0-9_]\-[^0-9]/i;

// catch-error-name
try {
	// blank
} catch (error: unknown) {
	console.error(error);
}

// consistent-destructuring
const obj = { prop1: 1, prop2: 2 };
const { prop1 } = obj;
const prop2 = obj.prop2;

// consistent-function-scoping
const scoping = function (): void {
	const innerArrow = (): void => {
		// blank
	};

	const innerFunc = function (): void {
		// blank
	};

	innerArrow();
	innerFunc();
};

// expiring-todo-comments
// TODO: [2021-11-15]: past due

// explicit-length-check
const array = [];
const isEmpty = !array.length;

if (array.length !== 0) {
	// blank
}

// new-for-builtins
const noNewArray = Array(2);

// no-unused-property
const usedObj = {
	used: 1,
	unused: 2,
};

console.log(usedObj.used);

const { used } = usedObj;

// numeric-separator-style
const bigNumber = 1_000;

// no-nested-ternary
const nestedTernary = true ? (true ? 1 : 2) : 3;

// prefer-code-point
const char = String.fromCharCode(0x1_f9_84);

// no-await-expression-member
async function doSomething(): Promise<string> {
	return "";
}

async function awaitSomething(): Promise<number> {
	return (await doSomething()).length;
}

// no-thenable
function then(): void {}

export { then };

// relative-url-style
const url = new URL("./foo", ".");

// text-encoding-identifier-case
const string = Buffer.toString("utf-8");

// prefer-modern-math-apis
const log = Math.log(2) * Math.LOG10E;

// no-useless-switch-case
switch (log) {
	case 1_000:

	default:
		scoping();
		break;
}

// prefer-native-coercion-functions
const toBoolean = (value: number): boolean => Boolean(value);

// no-negated-condition
if (!log) {
	console.log("false");
} else {
	console.log("true");
}

// no-typeof-undefined
if (typeof log === "undefined") {
	// blank
}

// prefer-set-size
const uniqueNumbers = [1, 1, 2, 2];

if ([...new Set(uniqueNumbers)].length === uniqueNumbers.length) {
	// blank
}

// prefer-blob-reading-methods
const fileReader = new FileReader();
const blob = new Blob();

fileReader.readAsArrayBuffer(blob);

// no-negation-in-equality-check
let foo = true;
let bar = false;

if (!foo !== bar) {
	abc = 1;
}

// "unicorn/no-length-as-slice-end"
const numbers = [1, 2, 3];
const sliced = numbers.slice(0, numbers.length);
