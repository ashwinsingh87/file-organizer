#!/usr/bin/env node
let inputarr = process.argv.slice(2)
// const { captureRejections } = require("events");
//C:\Users\Ashwin\Desktop\Mini project\src\commands\help.js

let helpObj = require("./src/commands/help");
let treeObj = require("./src/commands/tree");
let organizeObj = require("./src/commands/organize");
let deleteObj = require("./src/commands/delete");

let fs = require("fs");
let path = require('path')
//console.log(inputarr);

let command = inputarr[0];

switch (command) {
    case "tree":
        treeObj.treekey(inputarr[1]);
        break;
    case "organize":
        organizeObj.organizekey(inputarr[1]);
        break;
    case "help":
        helpObj.helpkey(inputarr[1]);
        break;
    case "delete":
        deleteObj.deletekey(inputarr[1]);
        break;
    default:
        console.log("please 🙏 input right command");
        break;
}


