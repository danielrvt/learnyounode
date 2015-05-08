'use strict';

var http = require('http');
var bl = require('bl');

var server = http.createServer(function (req, resp) {
	
	if (req.method != 'GET') return;

    resp.writeHead(200, { 'Content-Type': 'application/json' })

	if (req.url.indexOf("/api/parsetime") == 0) {
		var regex = /(iso=)(.+)$/g;
		var d = new Date(regex.exec(req.url)[2]);
		resp.write(JSON.stringify({
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()	
		}));
		resp.pipe(resp);
	}

	if (req.url.indexOf("/api/unixtime") == 0) {
		var regex = /(iso=)(.+)$/g;
		var d = new Date(regex.exec(req.url)[2]);
		resp.write(JSON.stringify({unixtime: d.getTime()}));
		resp.pipe(resp);
	}

	req.pipe(bl(function (err, data) {
		console.log(data.toString());
	}));
	
	resp.end();
});

server.listen(process.argv[2]);
