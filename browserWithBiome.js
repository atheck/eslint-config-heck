"use strict";

const node = require("./nodeWithBiome");

const env = {
    ...node.env,

    browser: true,
    commonjs: true,
    serviceworker: true,
    "shared-node-browser": true,
    worker: true,
};

module.exports = {
    ...node,
    env,
};