'use strict';

const loremIpsum = require('lorem-ipsum');

module.exports.getLoremIpsum = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: loremIpsum(),
      updatedFunction: 'this is now a text',
    }),
  };

  callback(null, response);
};
