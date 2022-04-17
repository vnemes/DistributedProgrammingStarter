import AWS from "aws-sdk";
import dotenv from "dotenv";
import { Order } from "../model/Order";


dotenv.config();

AWS.config.update({
    region: "eu-central-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const QUEUE_URL="https://sqs.eu-central-1.amazonaws.com/136087622122/DPDemoOrdersQueue";
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

export const placeOrder = async (order: Order) => {
    const params = {
        MessageBody: JSON.stringify(order),
        QueueUrl:QUEUE_URL,
    }
    try {
        const data = await sqs.sendMessage(params).promise();
        console.log("Successfully sent to SQS message ", data.MessageId);
        return data.MessageId;
    } catch (err){
        console.log("Error pushing order to queue", err);
        throw err;
    };
}