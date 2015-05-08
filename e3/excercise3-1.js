'use strict';

var fs = require('fs');

console.time('file 1');
console.time('file 2');

var buffer = fs.readFileSync(process.argv[2]);
var regex = /(\n)/g;
console.log(buffer.toString().match(regex).length);
console.timeEnd('file 1');

var buffer = fs.readFileSync(process.argv[3]);
var regex = /(\n)/g;
console.log(buffer.toString().match(regex).length);
console.timeEnd('file 2');
