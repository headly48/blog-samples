import { Handler, Context, Callback, APIGatewayProxyEvent, APIGatewayEvent } from 'aws-lambda';


const hello:Handler = async (event:APIGatewayProxyEvent, context:Context) => {

  console.log('PROCESSING REQUEST');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      // input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


export { hello }
