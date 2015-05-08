'use strict';

var bl  = require('bl');
var http = require('http');

http.get(process.argv[2], function (stream) {
	stream.pipe(bl(function (err, data) {
		if (err) return console.log(err);

		console.log(data.toString().length);
		console.log(data.toString());
	}));
});
