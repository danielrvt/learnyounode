'use strict';

var fs = require('fs');

console.time('file 1');
console.time('file 2');

fs.readFile(process.argv[2], function (err, buffer) {
	var regex = /(\n)/g;
	console.log(buffer.toString().match(regex).length);
	console.timeEnd('file 1');
});

fs.readFile(process.argv[3], function (err, buffer) {
	var regex = /(\n)/g;
	console.log(buffer.toString().match(regex).length);
	console.timeEnd('file 2');
});

