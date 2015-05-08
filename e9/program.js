'use strict';

var bl  = require('bl');
var http = require('http');

var fullData = [undefined, undefined, undefined];
var printData = function (data) {
	if (!fullData[0] || !fullData[1] || !fullData[2]) return;

	console.log(fullData[0]);
	console.log(fullData[1]);
	console.log(fullData[2]);
};

//URL1
http.get(process.argv[2], function (stream) {
	stream.pipe(bl(function (err, data) {
		if (err) return console.log(err);

		fullData[0] = data.toString();
		printData();
	}));
});

//URL2
http.get(process.argv[3], function (stream) {
	stream.pipe(bl(function (err, data) {
		if (err) return console.log(err);

		fullData[1] = data.toString();
		printData();
	}));
});

//URL3
http.get(process.argv[4], function (stream) {
	stream.pipe(bl(function (err, data) {
		if (err) return console.log(err);
		
		fullData[2] = data.toString();
		printData();
	}));
});
