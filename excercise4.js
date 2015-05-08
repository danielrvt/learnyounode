'use strict';

var fs = require('fs');

fs.readFile(process.argv[2], function (err, buffer) {
	var regex = /(\n)/g;
	console.log(buffer.toString().match(regex).length);
});


