const loremIpsum = require('lorem-ipsum');

exports.getLoremIpsum = function (event, context, callback) {
	//getLoremIpsum
	//console.log(loremIpsum());
	console.log('Inside getLoremIpsum handler');


	callback(null, {message: loremIpsum()});
} 