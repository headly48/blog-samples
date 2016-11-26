# Lorem Lipsum Serverless
lamda function to return the lorem text

project is for trying out serverless
https://serverless.com/


## Running Locally
Run the following command to run locally

node -e 'require("./handler.js").getLoremIpsum(null, null, function (blah, res) {console.log(res)})'

## Permisions
Serverless requires quite a few permissions to be added to aws user. Please create policy's for all files in /policy and add to the aws user that you wish to run serverless with

## Deploying
To deploy to aws run following command. Ensure your user has the correct permissions

For dev env run
serverless deploy

For prod env run
serverless deploy --stage prod



