'use strict';

var fs = require('fs');

module.exports = function (path, extension, callback) {

	fs.readdir(path, function (e, files) {
		if (e) return callback(e, null);

		var regex = new RegExp('\.' + extension + '$');
		var filtered = [];
		for(var i=0; i < files.length; i++) {
			if (files[i].match(regex)) filtered.push(files[i]);
		}
		callback(null, filtered);
	});
};

