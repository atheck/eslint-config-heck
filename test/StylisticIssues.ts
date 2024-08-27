// camelCase
const My_Prop = 1;

// capitalized-comments
const noComment = "";
// lowercase comment
// consecutive comment

function lotArgs (
    valueA: string,
    valueB: number
): string {
    return valueA + valueB.toString();
}

lotArgs(
    "a",
    2
);

// consitent-this
let self = this;

// func-name-matching: off

// func-names: off

// func-style
function declaration () {
    // Blank
}

// id-denylist: off

// id-length
const a = 1;
const x = "ok";

// id-match: off

const ternary =
    a === 1 ? true :
    x === "ok" ? false : true;

// no-inline-comments
// Allowed
const lineCommentPosition = 0; // Not allowed

// lines-around-comment
const lineOfCode = 1;
// Disallowed comment
const anotherLineOfCode = 2;

const objectWithComment = {
    // Ok
    key: 1,
    // Not ok
}

// max-depth: off
// max-lines: off
// max-lines-per-function: off
// max-nested-callbacks: off
// max-params: off
// max-statements: off

// max-statements-per-line
if (objectWithComment) { bar = 1; }

// multiline-comment-style
/*
    multiline comment
*/

// no-array-constructor
const constructedArray = new Array(1, 2, 3);

// no-bitwise
const bitwise = a | a;

// no-continue: off

// no-inline-comments
const inlineComment = /* Inline comment */ 2;

// no-lonely-if
if (a) {
    // Blank
} else {
    if (disallowedTernary) {
        // Blank
    }
}

// no-mixed-operators
const mixed = a && ternary || allowedTernary;
const formulua = 1 + 2 * 3;

// no-multi-assign
let multiAssignA;
let multiAssignB;
multiAssignA = multiAssignB = 5;

// no-multiple-empty-lines
const beforeMultipleEmptyLines = 0;


const afterMultipleEmptyLines = 0;

// no-negated-condition: off

// no-nested-ternary
const nestedTernary = a ? true : allowedTernary ? false : true;

// no-new-object
const newObject = new Object();

// no-plusplus: off
// no-restricted-syntax: off

// no-ternary: off

// no-underscore-dangle
const _dangle = 0;

// no-unneeded-ternary
const unneeded = a === 1 ? true : false;

// one-var
const firstVar, secondVar = 1;

// one-var-declaration-per-line: off (one-var at all)

// operator-assignment
let operatorAssignment = 2;
operatorAssignment = operatorAssignment + 2;

// prefer-exponentiation-operator
const pow = Math.pow(2, 2);

// prefer-object-spread
const objectAssign = Object.assign({}, { foo: "bar" });

// quote-props
const quoted = {
    "foo": "foo",
    "a-b": "a-b",
    1: 1,
    class: "class",
    ok: "ok",
};

// eslint-disable-next-line no-unreachable-loop
for (;;) {
    break;
}

//spaced-comment

// eslint-disable-next-line no-unused-expressions
templateFunc `template string`;

interface Foo {
    name: string,
}
type Test = string;
