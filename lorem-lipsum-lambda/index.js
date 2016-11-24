const loremIpsum = require('lorem-ipsum');



exports.getLoremIpsum = function (event, context, callback) {


	console.log(loremIpsum());
} 