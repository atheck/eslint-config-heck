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