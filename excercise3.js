'use strict';

var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var regex = /(\n)/g;
console.log(buffer.toString().match(regex).length);
