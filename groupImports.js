"use strict";

module.exports = {
    rules: {
        "sort-imports": [
            "error",
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        "import/order": [
            "error",
            {
                groups: ["unknown", "builtin", "external", "internal", "parent", "sibling", "index", "object"],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};