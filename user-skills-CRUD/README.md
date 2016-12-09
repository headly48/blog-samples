# User Skills CRUD Serverless api

This is a simple crud api that lets you to create and manage a user with an email and a list of skills.


## Endpoints

POST - /users
Creates a user and returns id of the user created

GET - /user/{userId}
Gets a user using Id

DEL - /user/{userId}
Deletes a user

PUT - /user/{userId}
Updates a users email and skills


## Resources

- Postman Collection
	https://www.getpostman.com/collections/34d0ceaf9a0b6d66922b


## Running Locally
While there are node modules to help simulate lambda locally this is a fairly simple application so you can easily trigger the functions without having to install any other dependencies

- Create User
	node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; process.env.usersTableName = "user-s kills-CRUD-usersTable-local"; require("./index.js").createUser({body: "{\"email\": \"awd\"}"}, null, functio n (blah, res) {console.log(res)})'

- Update User
	node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; process.env.usersTableName = "user-skills-CRUD-usersTable-local"; require("./index.js").updateUser({pathParameters: {userId: "95ecc380-afe9-11e4-9b6c-751b66dd541e"}, body: "{\"email\": \"awd\"}"}, null, function (blah, res) {console.log(res)})'

- Delete User
	node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; process.env.usersTableName = "user-skills-CRUD-usersTable-local"; require("./index.js").deleteUser({pathParameters: {userId: "95ecc380-afe9-11e4-9b6c-751b66dd541e"}}, null, function (blah, res) {console.log(res)})'

- Get User
	node -e 'process.env.dynamoDbEndpoint = "http://192.168.99.100:8000"; process.env.usersTableName = "user- skills-CRUD-usersTable-local"; require("./index.js").getUser({pathParameters: {userId: "95ecc380-afe9-11e4-9 b6c-751b66dd541e"}}, null, function (blah, res) {console.log(res)})'



## Deploying
Deploys to AWS using serverless

- Dev
	serverless deploy --stage dev

- Prod
	serverless deploy --stage prod







