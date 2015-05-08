'use strict';

var net = require('net');

var server = net.createServer(function (c) {
	var d = new Date();
	c.write(d.toISOString().replace('T', ' ').substr(0, 10) + " " + d.getHours() + ":" + d.getMinutes() + "\n");
	c.pipe(c);
	c.end();
});

server.listen(process.argv[2]);
