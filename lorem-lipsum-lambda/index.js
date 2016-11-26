const loremIpsum = require('lorem-ipsum');

exports.getLoremIpsum = function (event, context, callback) {


	callback(null, {message: loremIpsum()});
} 