# Distributed Programming BackEnd

Spring boot application that exposes REST endpoints allowing its clients to create, read, update and delete product entities.    
The database used is a MySQL instance managed by the RDS service in AWS. Swagger is used for documentation purposes.

## Getting Started
1. To create a Spring Project: https://start.spring.io/ (spring intializr). Recommended packages:    
1.1 Spring Web    
1.2 Spring Data    
1.3  Lombok    
1.4 (Optional, depending on the use case) Spring Security, Kafka
1. Setting up Swagger: https://www.baeldung.com/swagger-2-documentation-for-spring-rest-api       
1. Connecting to the database with Spring Data: https://spring.io/guides/gs/accessing-data-mysql/
1. Spring with RDS: https://reflectoring.io/spring-cloud-aws-rds/
1. Using the AWS CDK(Cloud Development Kit) to call cloud services:
 - https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-install.html
- https://aws.amazon.com/blogs/opensource/getting-started-with-spring-boot-on-aws-part-1/ (git https://github.com/stratospheric-dev/stratospheric/tree/main/getting-started-with-spring-boot-on-aws) 
- https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

## Running the application 
As a first step, fill in `spring.datasource.password` in `/resources/application.properties`

Building the app:
```
./mvnw install
```
Starting the app:
```
./mvnw spring-boot:run

```
To access the Swagger endpoint/model documentation navigate to http://localhost:8080/swagger-ui/

If you want to try outan endpoint by itself, navigate to http://localhost:8080/products either in the browser, or use a http client (e.g https://www.postman.com/)

# Distributed Programming FrontEnd

React application that fetches a list of products from the backend and allows the creation and deletion of individual products.    
Shopping basket is a feature that is not implemented.

## Getting started

1. To create a fresh react app with typescript go to: https://create-react-app.dev/docs/adding-typescript/
1. It is highly advisable to use a component library. This project uses Material UI: https://mui.com/getting-started/installation/, although there are other popular libraries as well (e.g. Bootstrap react components)    
To install the component library, you have to run `npm install @mui/material @mui/styled-engine-sc styled-components --legacy-peer-deps` if you're using react >=18)
1. Helpful guide on using State: https://reactjs.org/docs/hooks-state.html
1. Using hooks (esp. useEffect): https://reactjs.org/docs/hooks-effect.html
1. Defining and passing component props in React: https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript
1. Connect the application to the backend running at http://localhost:8080/
1. Sample images taken from: https://www.shutterstock.com/

## Running the application

Start and wait for the backend server to initialize.     
Run the following command:
```
npm start
```

In your browser, go to http://localhost:3000/ to view the UI

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