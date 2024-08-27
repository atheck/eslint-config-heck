// accessor-pairs
const accessorPairsSetWithoutGet = {
    set name(value: string) {}
};
const accessorPairsGetWithoutSet = {
    get name() { return ""; }
};

// array-callback-return
[1, 2, 3].map(i => {});
[1, 2, 3].map(i => { return; });
[1, 2, 3].forEach(i => { return i; });

// block-scoped-var
function blockScopedVar () {
    if (accessorPairsGetWithoutSet) {
        var value = "";
    }

    value = "";
}

// class-methods-use-this
class MethodsUseThis {
    notUsingThis () {

    }
}

// consistent-return: off (typescript handles it)
const noConsistentReturn = function (): boolean {
    if (accessorPairsGetWithoutSet) {
        return true;
    }

    return;
};

// curly
if (accessorPairsGetWithoutSet) new MethodsUseThis();

// default-case: off (trust in exhaustivness)
const defaultCase = function (num: number): string {
    switch (num) {
        case 1:
            return "1";
    }
}

// default-case-last
switch (1) {
    default:
        break;

    case 1:
        break;
}

// default-param-last
const defaultParamLast = function (a: number = 0, b: number) {

}

defaultParamLast(undefined, 0);

// eqeqeq
if (o == null) {
    // blank
}

// grouped-accessor-pairs
const groupedAccessorPairs = {
    get name () { return ""; },
    b: 1,
    set name (value: string) {},

    set value (value: string) {},
    get value () { return ""; },
}

// guard-for-in
for (const key in groupedAccessorPairs) {
    console.log(key);
}

// no-alert
alert("");
confirm("");
prompt("");

// no-case-declarations
switch (o.name) {
    case "":
        let i = 1;
        break;
}

// no-constructor-return
class ConstructorReturn {
    constructor () {
        return;
    }
}

// no-div-regex: off (trust syntax highlighting)
const regex = /=foo/

// no-else-return
const elseReturn = function () {
    if (regex) {
        return true;
    } else if (groupedAccessorPairs) {
        return true;
    } else {
        return false;
    }
}

// no-empty-function
const emptyFunction = function () {}

// no-empty-pattern
const {} = accessorPairsGetWithoutSet;

// no-eq-null: off (handled by eqeqeq)
if (accessorPairsGetWithoutSet == null) {
    // blank
}

// no-eval
eval("let a = 0;");

// no-extend-native
Array.prototype.group = function () {};

// no-extra-label
B: for (let i = 0; i < 10; ++i) {
    if (i === 5) {
        break B;
    }
}

// no-fall-through
let value = "value";
switch (value) {
    case "value":

    case "invalid":
        // falls through

    default:
        break;
}

// no-floating-decimal
const floatPre = .2;
const floatPost = 2.;

// no-global-assign
Object = null;

// no-implicit-coercion
const b = !!accessorPairsGetWithoutSet;

// no-implicit-globals
const globalVar = 1;

// no-implied-eval
setTimeout("alert('Hi');", 100);

// no-invalid-this
this.a = 0;

// no-iterator
const foo = {};
foo.__iterator__ = function () {
    // blank
};

// no-label
label:
    while (false) {
        // ...
    }

// no-lone-blocks
{
    // blank
}

// no-loop-func
for (var i = 0; i < 10; i++) {
    const returnsI = function () { return i; };
    returnsI();
}

// no-multi-str
const multiStr = "Line 1 \
Line 2";
const multiTemplateStr = `
Line 1
Line 2`;

// no-new
new Array();

// no-new-func
const newFunc = new Function("a", "b", "return a + b;");

// no-new-wrappers
const newString = new String("Hello");

// no-nonoctal-decimal-escape: off (typescript handles it)
// const noNonOctalEscape = "\8\9";

// no-octal-escape: off (typescript handles it)
// const octalEscape = "\251";

// no-param-reassign
const paramReassign = function (param: { a: number }) {
    param = { a: 2 };
    param.a = 3;
}

// no-proto
accessorPairsGetWithoutSet.__proto__ = {};

// no-redeclare
var a = 10;
var a = 11;
var top = 11;

// no-return-assign
const returnAssign = function () {
    let foo = 1;

    return foo = 1 + 2;
}

// no-return-await: off
const returnAwait = async function () {
    return await new Promise<void>(resolve => { resolve(); });
}

// no-self-assign
let selfAssign = 0;
selfAssign = selfAssign;

// no-self-compare
if (selfAssign === selfAssign) {
    // blank
}

// no-sequences
var sequenceA = (3, 5);
var sequenceB = 2;
sequenceA = sequenceB += 5, sequenceA + sequenceB;
for (let i = 0, j = 10; i < j; i++, j--) {
    // blank
}

// no-throw-literal
if (sequenceA) {
    throw 0;
}

// no-unmodified-loop-condition
let condition = 1;

while (condition) {
    // blank
}

// no-unused-expression
0;

// no-unused-labels: off (no-labels at all)
UNUSED_LABEL: var labelVar = 0;

// no-useless-call
returnAssign.call(undefined);

// no-useless-catch
try {
    returnAssign();
} catch (ex) {
    throw ex;
}

// no-useless-concat
const concat = "a" + "b";

// no-useless-escape
const uselessEscape = "\a\'";

// no-useless-return
const uselessReturn = function () {
    return;
};

// no-void
(function(){
    return void 0;
})();

// no-warning-comments
// TODO: warning

// no-with: off (not supported in typescript)
with (accessorPairsGetWithoutSet) {
    // blank
}

// prefer-named-capture-group
const withoutName = /(ba[rz])/;
const group = withoutName.exec("bar")![0];

const withName = /(?<bar>ba[rz])/;
const namedGroup = withName.exec("bar")?.groups?.bar;

// prefer-promise-reject-errors
const noRejectError = new Promise((resolve, reject) => { reject(""); });

// prefer-regex-literal
const regexCtor = new RegExp("bar");
const regexCtorAllowed = new RegExp("bar" + group);

// radix
const parsed = parseInt("071");

// require-await
const withoutAwait = async function () {
    uselessReturn();
}

// require-unicode-regexp
const noUnicodeRegexp = /aaa/;

// vars-on-top
const varsNotOnTop = function () {
    var a = 0;
    uselessReturn();
    var b = 1;
}

// yoda
if (1 === iife) {
    // blank
}

export {};