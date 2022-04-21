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

## Deploying to EC2

- build the project `./mvn clean install`
- find and extract the jar file from `/target/<AppName>.jar`

In AWS Console:

- create an EC2 instance (free tier)
    - if you're using RDS, place the EC2 instance and RDS in the same VPC
    - also for RDS, add an inbound rule to allow the EC2's security group to access the database
    - allow port `8080` in the EC2's security group settings
- download pem keys to access
- copy the jar to your instance using scp (on mac/linux)
```
scp -i <yourKey>.pem <AppName>.jar ec2-user@<yourEc2IP>:~
```
- connect to your instance via ssh: `ssh -i <yourKey>.pem ec2-user@<yourEc2IP>`
- install java in your EC2 instance ` sudo yum install java-1.8.0`
- run the app: `java -jar <AppName>.jar`
- go to http://ec2-<yourInstanceId>.compute.amazonaws.com:8080/products and check that you can access the server from your browser

(Reference: https://cloudkatha.com/how-to-deploy-spring-boot-application-on-aws-ec2/)
