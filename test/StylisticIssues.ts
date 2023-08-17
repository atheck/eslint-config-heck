// array-bracket-newline
const bracketNewLine = [
    1,
    2];
const bracketNewLine2 = [1, 2];
const bracketNewLine3 = [
    1,
    2
];

// array-bracket-spacing
const bracketSpacing = [ 1, 2, 3 ];

// array-element-newline
const arrayNewline = [
    1,
    2, 3,
];

// block-spacing
const blockSpacing = () => {return 1};

// brace-style
if (blockSpacing === null)
{
    // blank
}

// camelCase
const My_Prop = 1;

// capitalized-comments
const noComment = "";
// lowercase comment
// consecutive comment

// comma-dangle
const commaDangle = {
    a: 1,
    b: 2
};
const commaDangle2 = { a: 1, b: 2 };

// comma-spacing
const commaSpacing = [1,2];

// comma-style
const commaStyle = [
    1
    , 2
    ,
];

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

// computed-property-spacing
const computedPropertySpacing = { a: 1 };
const someProp = "a";
const someA = computedPropertySpacing[ someProp ];

// consitent-this
let self = this;

// func-call-spacing
const funcCallSpacing = new Date ();

// func-name-matching: off

// func-names: off

// func-style
function declaration () {
    // Blank
}

// function-call-argument-newline
const functionCallArgumentNewline = new Date(
    2021,
    7, 12,
);

// function-paren-newline
const functionParenNewline = new Date(2021,
    7,
    12);

// id-denylist: off

// id-length
const a = 1;
const x = "ok";

// id-match: off

// implicit-arrow-linebreak
const arrowLinebreak = () =>
    "";

// indent
switch (a) {
case 1:
    break;
}

const ternary =
    a === 1 ? true :
    x === "ok" ? false : true;

// key-spacing
const keySpacing = {
    key :"wrong",
    mulitline :{
        key2: "correct",
    },
    singleline :{ key2: "correct" },
};

// keyword-spacing
if(a === 1) {
    // Blank
}else{
    // Blank
}

// line-comment-position

// Allowed
const lineCommentPosition = 0; // Not allowed

// linebreak-style

// lines-around-comment
const lineOfCode = 1;
// Disallowed comment
const anotherLineOfCode = 2;

const objectWithComment = {
    // Ok
    key: 1,
    // Not ok
}

// lines-between-class-members
class LinesBetweenClassMembers {
    static methodA () {
        // Blank
    }
    static methodB () {}
}

// max-depth: off
// max-len: off
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

// multiline-ternary
const allowedTernary = a ? true : false;
const disallowedTernary = a ?
    true : false;

// new-cap, new-parens
const constructorFunction = function (): void {
    // Blank
}
const constructedFunc = new constructorFunction;

// newline-per-chained-call
const zero = [1, 2].map(i => i).filter(i => i > 0).findIndex(i => i === 1);

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

// no-mixed-spaces-and-tabs

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

// no-tabs

// no-ternary: off

// no-trailing-spaces

// no-underscore-dangle
const _dangle = 0;

// no-unneeded-ternary
const unneeded = a === 1 ? true : false;

// no-whitespace-before-property
const whitespacedProperty = a. toString();

// nonblock-statement-body-position
if (a) a.toString();

// object-curly-newline
// object-curly-spacing
// object-property-newline
const objectCurly = {key1: "",
    key2: "", key3: "",
};
const objectCurly2 = {
    key1: "",
};

const objWithArray = { arr: [] };
const ojbWithObj = { obj: {} };

// one-var
const firstVar, secondVar = 1;

// one-var-declaration-per-line: off (one-var at all)

// operator-assignment
let operatorAssignment = 2;
operatorAssignment = operatorAssignment + 2;

// operator-linebreak
const operatorLinebreak = 2
    +
    2;

// padded-blocks
if (a) {

    a.toString();

}

// padding-line-between-statements
const noPadding = 0;
noPadding.toString();
const noPaddingAfter = 1;

switch (operatorLinebreak) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

const noPaddingBeforeReturn = function () {
    const noPaddingConst = 0;
    return noPaddingConst;
}

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

// quotes
const singleQuotes = 'value';
const backticks = `backticks`;
const backticksOk = `
multiline`;

// semi
const noSemi = 0

if (noSemi) { const lastStatement = 1 }

// semi-spacing
const semiSpacing1 = 0;const semiSpacing2 = 1;

// eslint-disable-next-line no-unreachable-loop
for (;;) {
    break;
}

// semi-style
for (
    let i = 0
    ; i < 10
    ; ++i
) {
    // Blank
}

// sort-keys: off
// sort-vars: off

// space before-blocks
if (semiSpacing1){
    // Blank
}

// space-before-function-paren
// space-in-parens
const noSpace = function( noSpacedArg: number ) {
    return noSpacedArg;
};

// space-infix-ops
const noOpsSpace = 1+2;

// space-unary-ops
const noSpacedUnary = typeof!a;
let plusplus = - 0;

plusplus ++;

//spaced-comment

// switch-colon-spacing
switch (plusplus) {
    case 1 :break;
}

// template-tag-spacing
const templateFunc = function (template: TemplateStringsArray) {
    // Blank
};

// eslint-disable-next-line no-unused-expressions
templateFunc `template string`;

// wrap-regex
const regexResult = /foo/u.exec("foo");

// This must be the last rule of this file:
// eol-last
const lastLine = "";

interface Foo {
    name: string,
}
type Test = string;
