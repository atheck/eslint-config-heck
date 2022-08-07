// console.log("first");

import { EventEmitter } from "node:events";
import path from "node:path";
import { abort, addListener } from "node:process";
import { ESLint, Linter as a } from "eslint";
import { Fragment } from "react";
import { name } from "../package.json";
import { compilerOptions } from "../tsconfig.json";
import { complex } from "./Complexity";
import { Component } from "./React";

export {
    Fragment,
    path,
    Component,
    name,
    ESLint,
    a,
    EventEmitter,
    abort,
    addListener,
    compilerOptions,
    complex,
};