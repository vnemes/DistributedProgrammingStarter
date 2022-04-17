# Distributed Programming Node Service Demo

Node back end service that provides a persistent shopping cart and allows its clients to place orders with the in their shopping cart.
The application exposes rest endpoints to interface with the shopping cart service, storing a user's products to be ordered in DynamoDB.

When an order is placed, the contents of the shopping cart are pushed to an SQS queue that triggers a lambda for every item received. The lambda sends an email with the items in the cart.

The directory `/lambda/index.js` contains the lambda code responsible with sending the email via SES/

## Getting started

1. Creating a node application with express and typescript: https://blog.logrocket.com/how-to-set-up-node-typescript-express/
1. REST Endpoints with Node: https://developer.okta.com/blog/2018/11/15/node-express-typescript
1. Using DynamoDB with Node: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.WriteItem.html ([tutorial](https://referbruv.com/blog/posts/reading-and-writing-to-aws-dynamodb-using-nodejs-with-example))
1. Using SQS with node: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sqs-examples.html ([tutorial](https://medium.com/@drwtech/a-node-js-introduction-to-amazon-simple-queue-service-sqs-9c0edf866eca))
1. Using Lambda with SQS: https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
1. Sending an email using SES https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/

## Running the application

Start and wait for the backend server to initialize.     
Run the following command:
```
npm start
```

To run the server and automatically refresh on changes, use:
```
npm run dev
```