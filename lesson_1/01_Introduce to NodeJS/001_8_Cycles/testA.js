console.log('File A is loading...');

exports.done = false;

let b = require('./testB.js.js');
console.log('in testA, testB.done = ', b.done);

exports.done = true;

console.log('File A is done!');