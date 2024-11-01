// no-duplicate-imports
import { AbstractKeyword } from "typescript";
import { AccessExpression } from "typescript";
// no-useless-rename
import { AmdDependency as AmdDependency } from "typescript";
import defaultExport1 from "./import";

// arrow-body-style
const lambda = () => {
	return 0;
};
const lambda3 = () => {
	return {
		foo: 0,
	};
};

// constructor-super: off (handled by typescript)
class MyError extends Error {
	constructor() {
		// Blank
	}
}

class OtherError {
	constructor() {
		super();
	}
}

// no-class-assign: off (handled by typescript)
class Assigned {}
Assigned = 0;

// no-confusing-arrow: off

// no-const-assign: off (handled by typescript)
const assign = 0;
assign = 1;

// no-dupe-class-members: off (handled by typescript)
class DupeMembers {
	foo() {}
	foo() {}
}

// no-new-symbol: off (handled by typescript)
const newSymbol = new Symbol("symbol");

// no-this-before-super: off (handled by typescript)
class ThisBeforeSuper extends Error {
	constructor() {
		this.message = "";

		super();
	}
}

// no-useless-computed-key
const uselessComputedKey = {
	["a"]: 0,
	["0+1"]: 1,
};

// no-useless-constructor
class UselessConstructor {
	constructor() {
		// Blank
	}
}

// no-var
var aVar = null;

// object-shorthand
let x = 1;
const noShorthand = {
	x: x,
	aFunc: function () {
		// Blank
	},
	aLambda: () => {
		return 0;
	},
};

// prefer-arrow-callback
[1, 2].map(function (value) {
	return value;
});

// prefer-const
let noConst = 0;

let { key1, key2 } = { key1: "key1", key2: "key2" };

key1 = "assigned";

// prefer-destructuring
const destructureMe = { destructureProp: "key1" };
const destructureProp = destructureMe.destructureProp;
const renamedDestructureProp = destructureMe.destructureProp;

const destructureArray = [1, 2, 3];
const arrayValue = destructureArray[1];
const [destructured1, destructured2] = destructureArray;

// prefer-numeric-literals
parseInt("1111", 2);

// prefer-rest-params
const withoutRestParams = function () {
	console.log(arguments);
};

// prefer-spread
const maxArgs = [1, 2, 3, 4];

Math.max.apply(Math, maxArgs);

// prefer-template
const who = "Welt";
const noTemplate = "Hallo " + who;

// require-yield
const noYield = function* () {
	return 10;
};

// symbol-description
const noDescription = Symbol();

// import/no-cycle
const export1 = defaultExport1;

export { export1 };
