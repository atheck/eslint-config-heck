// init-declarations
let noInit;

// no-delete-var: off (typescript handles it)
const toDelete = {
    a: 1,
};
delete toDelete;

// no-label-var: off (no-labels at all)

// no-restricted-globals
function onClick() {
    console.log(event);
}

// no-shadow
var shadow = 3;

function b() {
    var shadow = 10;
}

// no-shadow-restricted-names: off (typescript handles it)
let eval = 1;

// no-undef: off (typescript handles it)
let bar = a + 1;
if (typeof a === "undefined") {
    // blank
}

// no-undef-init
let undef = undefined;

// no-undefined: off (typescript handles it, duplicate of no-shadow-restricted-names)
let undefined = 1;

// no-unued-vars
const unused = 1;

// no-use-before-define: off (typescript handles it)
useBeforeDefine(usedBeforeDefine);

const useBeforeDefine = function (someVar: string) {
    console.log(myVar);
    usingFunc();
    const myVar = "";
};

const usingFunc = function () {
    // Blank
};

const usedBeforeDefine = "";