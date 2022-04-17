

import AWS from "aws-sdk";
import dotenv from "dotenv";
import { Product } from "../model/Product";


dotenv.config();

AWS.config.update({
    region: "eu-central-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'ShoppingCart';



export const getShoppingCartForUser = async (user: string) => {
    const params = {
        TableName: tableName,
        ExpressionAttributeValues: {
            ':uid': user,
        },
        KeyConditionExpression: 'userId = :uid',
    };
    // retrieve cart content from dynamo
    try {
        const resp = await client.query(params).promise();
        console.log("GetItem succeeded: ", JSON.stringify(resp, null, 2));
        return resp.Items;
    } catch (e) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(e, null, 2));
        throw e;
    }
}

export const addProductToShoppingCart = async (user: string, product: Product) => {
    const params = {
        TableName: tableName,
        Item: {
            userId: user,
            ...product
        }
    }

    try {
        await client.put(params).promise();
        console.log("PutItem succeeded: ", JSON.stringify(product, null, 2));
    } catch (e) {
        console.log("Error", JSON.stringify(e, null, 2));
        throw e;
    }
}

export const deleteProductFromShoppingCart = async (user: string, productId: number) => {
    const params = {
        TableName: tableName,
        Key: {
            "userId": user,
            "id": productId,
        }
    }
    try {
        await client.delete(params).promise();
        console.log("DeleteItem succeeded for pid ", productId);
    } catch (e) {
        console.log("Error", JSON.stringify(e, null, 2));
        throw e;
    }
}
// todo add methods here for adding and deleting a product to cart
