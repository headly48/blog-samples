#locally


node -e 'require("./index.js").getLoremIpsum(null, null, function (blah, res) {console.log(res)})'

node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; require("./index.js").getUser(null, null, function (blah, res)
{console.log(res)})'


 node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; process.env.usersTableName = "user-skills-CRUD-usersTable-local"; require("./index.js").getUser({pathParameters: {userId: "123"}}, null, function (blah, res) {console.log(res)})'

node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; process.env.usersTableName = "user- skills-CRUD-usersTable-local"; require("./index.js").getUser({pathParameters: {userId: "95ecc380-afe9-11e4-9 b6c-751b66dd541e"}}, null, function (blah, res) {console.log(res)})'


node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; process.env.usersTableName = "user-s kills-CRUD-usersTable-local"; require("./index.js").createUser({body: "{\"email\": \"awd\"}"}, null, functio n (blah, res) {console.log(res)})'

http://stackoverflow.com/questions/19868938/how-i-can-work-with-amazons-dynamodb-local-in-node