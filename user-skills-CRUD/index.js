'use strict';

const AWS = require('aws-sdk');
const UserService = require('./userService.js');
const uuidvalidator = require('uuid-validate');

let dynamoDb;

//Set dynamoDbEndpoint if it exists
if (process.env.dynamoDbEndpoint) {
  console.log('*** Manually setting dynamoDb config');
  dynamoDb = new AWS.DynamoDB({accessKeyId: 'headly48', secretAccessKey: '123', region: 'us-west-2', endpoint: new AWS.Endpoint(process.env.dynamoDbEndpoint)});
} else {
  dynamoDb = new AWS.DynamoDB();
}

let userService = new UserService(dynamoDb, process.env.usersTableName);

module.exports.getUser = (event, context, callback) => {

  if (!event.pathParameters.userId || !uuidvalidator(event.pathParameters.userId)) {

    return callback(null, {statusCode: 400, body: JSON.stringify({error: 'UserId is invalid'})});
  }

  userService.getUser(event.pathParameters.userId).then(function (data) {

    if (!data || Object.keys(data).length === 0) {
      
      callback(null, {statusCode: 404, body: {message: 'User does not exist'}});
    } else {

      callback(null, {statusCode: 200, body: JSON.stringify(data)});
    }
  }).catch(function (error) {

    callback(JSON.stringify({error: error}));
  });
};

module.exports.createUser = (event, context, callback) => {

  let requestBody = JSON.parse(event.body);

  if(!requestBody.email) {
    return callback(null, {statusCode: 400, body: JSON.stringify({error: 'Please provide users email'})});
  }

  userService.createUser(requestBody).then(function (user) {

    callback(null, {statusCode: 201, body: JSON.stringify(user)});
  }).catch(function (error) {
    console.log('Error creating user. ' + error);
    callback(error);
  });
};

module.exports.updateUser = (event, context, callback) => {

  if (!event.pathParameters.userId || !uuidvalidator(event.pathParameters.userId)) {

    return callback(null, {statusCode: 400, body: JSON.stringify({error: 'UserId is invalid'})});
  }

  let requestBody = JSON.parse(event.body);

  if(!requestBody.email) {
    return callback(null, {statusCode: 400, body: JSON.stringify({error: 'Please provide users email'})});
  }

  userService.updateUser(event.pathParameters.userId, requestBody).then(function () {

    callback(null, {statusCode: 204});
  }).catch(function (error) {
    console.log('Error creating user. ' + error);
    callback(error);
  });
};

module.exports.deleteUser = (event, context, callback) => {

  let requestBody = JSON.parse(event.body);

  if (!event.pathParameters.userId || !uuidvalidator(event.pathParameters.userId)) {

    return callback(null, {statusCode: 400, body: JSON.stringify({error: 'UserId is invalid'})});
  }

  userService.deleteUser(event.pathParameters.userId).then(function () {

    callback(null, {statusCode: 204});
  }).catch(function (error) {
    console.log('Error creating user. ' + error);
    callback(error);
  });
};



