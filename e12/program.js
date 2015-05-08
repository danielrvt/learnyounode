'use strict';

var http = require('http');
var bl = require('bl');

var server = http.createServer(function (req, resp) {

	if (req.method != 'POST') return;

	req.pipe(bl(function (err, data){
		var upper = data.toString().toUpperCase();
		resp.write(upper);
		resp.pipe(resp);
		resp.end();
	}));
});
server.listen(process.argv[2]);
