'use strict';

const uuidGenerator = require('node-uuid');

class UserService {
  constructor (dynamoDb, tableName) {

      this.dynamoDb = dynamoDb;
      this.tableName = tableName;
  }

  getUser (userId) {
    
    let tableData = null;

    var params = {
        TableName: this.tableName,
        Key: { // a map of attribute name to AttributeValue for all primary key attributes
            userId: { S: userId}
        },
        AttributesToGet: [
            'userId',
            'email',
            'skills'
        ]
    };
    return this.dynamoDb.getItem(params).promise().then(function (data) {
      let user = {};
      user.userId = data.Item.userId.S;

      return user;
    });
  }

  createUser(userDetails) {

    let userId = uuidGenerator.v4();

    var params = {
        TableName: this.tableName,
        Item: {
          userId: { S: userId},
          email: {S: userDetails.email}
        }
    };

    if (userDetails.skills) {
      params.Item.skills = {SS: userDetails.skills}
    }

    return this.dynamoDb.putItem(params).promise().then(function (data) {
      console.log('Created user ' + userId);

      return {userId: userId};
    });
  }
}

module.exports = UserService;