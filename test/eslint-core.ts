// ESLint Core Rules Test File
// Each section contains code that triggers the corresponding rule

// array-callback-return
const arr = [1, 2, 3];
arr.map((item) => {
	console.log(item);
});

// no-invalid-regexp
const invalidRegex = new RegExp("[");

// no-promise-executor-return
const promise = new Promise((resolve) => {
	return resolve(1);
});

// no-unexpected-multiline
const greeting = "Hello"(1 + 2).toString();

// no-unmodified-loop-condition
let condition = true;
while (condition) {
	console.log("loop");
}

// no-unreachable-loop
for (let i = 0; i < 10; i++) {
	break;
}

// no-useless-assignment
let uselessVar = 1;
uselessVar = 2;
uselessVar = 3;

// require-atomic-updates
let score = 0;
async function updateScore(): Promise<void> {
	score += await getScore();
}

async function getScore(): Promise<number> {
	return 10;
}

// accessor-pairs
const accessorObj = {
	set value(val: number) {
		this._value = val;
	},
	_value: 0,
};

// block-scoped-var
function blockScoped(): void {
	if (true) {
		var blockVar = 1;
	}
	console.log(blockVar);
}

// class-methods-use-this
class NoThis {
	method(): number {
		return 42;
	}
}

// consistent-return
function inconsistentReturn(value: boolean): number | undefined {
	if (value) {
		return 1;
	}
	return;
}

// consistent-this
function wrongThis(): void {
	const self = this;
	console.log(self);
}

// func-style
const arrowNotAllowed = (): void => {};

// id-length
const a = 1;

// logical-assignment-operators
let logicalVar: number | null = null;
logicalVar = logicalVar ?? 1;

// new-cap
function myConstructor(): void {}
const instance = new myConstructor();

// no-caller
function callerFunc(): void {
	console.log(arguments.callee);
}

// no-extend-native
Array.prototype.customMethod = function (): void {};

// no-extra-bind
const boundFunc = function (): void {
	console.log("no this");
}.bind({});

// no-implied-eval
setTimeout("console.log('eval')", 100);

// no-inline-comments
const inlineVar = 1; // inline comment

// no-invalid-this
function invalidThis(): void {
	console.log(this);
}

// no-iterator
const iteratorObj = {
	__iterator__: function (): void {},
};

// no-labels
label: for (let i = 0; i < 10; i++) {
	break label;
}

// no-loop-func
const loopFuncs = [];
for (var i = 0; i < 10; i++) {
	loopFuncs.push(function () {
		return i;
	});
}

// no-multi-assign
let multiA: number, multiB: number, multiC: number;
multiA = multiB = multiC = 1;

// no-new
new Promise((resolve) => resolve(1));

// no-new-func
const dynamicFunc = new Function("a", "b", "return a + b");

// no-object-constructor
const obj = new Object();

// no-script-url
const scriptUrl = "javascript:void(0)";

// no-shadow
const shadowVar = 1;
function shadowFunc(): void {
	const shadowVar = 2;
	console.log(shadowVar);
}

// no-underscore-dangle
const _privateVar = 1;

// no-useless-call
function uselessCall(): void {}
uselessCall.call(undefined);

// no-useless-return
function uselessReturn(): void {
	console.log("done");
	return;
}

// no-warning-comments
// TODO: fix this later
// FIXME: broken code

// prefer-destructuring
const destructArr = [1, 2, 3];
const first = destructArr[0];

const destructObj = { prop: 1 };
const prop = destructObj.prop;

// prefer-named-capture-group
const unnamedCapture = /(\d+)/;

// prefer-object-has-own
const hasOwn = Object.prototype.hasOwnProperty.call(obj, "prop");

// prefer-promise-reject-errors
Promise.reject("error string");

// require-unicode-regexp
const nonUnicodeRegex = /foo/;

// strict
function nonStrict(): void {
	console.log("no strict mode");
}

// vars-on-top
function varsNotOnTop(): void {
	console.log("first");
	var lateVar = 1;
}

export {
	arr,
	invalidRegex,
	promise,
	greeting,
	condition,
	uselessVar,
	score,
	accessorObj,
	blockScoped,
	NoThis,
	inconsistentReturn,
	wrongThis,
	arrowNotAllowed,
	a,
	logicalVar,
	instance,
	callerFunc,
	boundFunc,
	inlineVar,
	invalidThis,
	iteratorObj,
	loopFuncs,
	multiA,
	dynamicFunc,
	obj,
	scriptUrl,
	shadowVar,
	_privateVar,
	uselessCall,
	uselessReturn,
	destructArr,
	destructObj,
	unnamedCapture,
	hasOwn,
	nonUnicodeRegex,
	nonStrict,
	varsNotOnTop,
	updateScore,
};
