'use strict';

var reader = require('./mymodule');

reader(process.argv[2], process.argv[3], function (e, files) {

	if (e) return console.log(e);

	for(var i=0; i<files.length; i++) {
		console.log(files[i]);
	}
});
