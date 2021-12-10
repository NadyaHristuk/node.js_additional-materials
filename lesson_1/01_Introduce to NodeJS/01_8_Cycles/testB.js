console.log("File B is loading...");

exports.done = false;
let a = require("./testA.js.js.js");
console.log("in testB, testA.done = ", a.done);
exports.done = true;

console.log("File B is done!");
