'use strict';

var fs = require('fs');

fs.readdir(process.argv[2], function (e, files) {
	var regex = new RegExp("\." + process.argv[3] + "$");
	for(var i=0; i<files.length; i++) {
		if (files[i].match(regex)) console.log(files[i]);
	}
});
