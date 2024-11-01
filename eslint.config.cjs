"use strict";

const complexity = require("./complexity.cjs");
const groupImports = require("./groupImports.cjs");
const nodeWithBiome = require("./nodeWithBiome.cjs");

module.exports = [...nodeWithBiome, ...complexity, ...groupImports];
