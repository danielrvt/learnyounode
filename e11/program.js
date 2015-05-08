'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {
	
	fs.readFile(process.argv[3], function (err, buffer) {
		resp.write(buffer.toString());
		resp.pipe(resp);
		req.close();
	});

});
server.listen(process.argv[2]);
