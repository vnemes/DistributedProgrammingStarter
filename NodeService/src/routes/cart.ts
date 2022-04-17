import { Router } from 'express';
import AWS from "aws-sdk";
import dotenv from "dotenv";
import { addProductToShoppingCart, deleteProductFromShoppingCart, getShoppingCartForUser } from '../service/cartDynamoService';

dotenv.config();

AWS.config.update({
    region: "eu-central-1",
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
});

const router = Router();

router.all('/**', (req, res, next) => {
    // middleware to perform authentication and everything else
    // in our example, set a mock user id
    res.locals.userId = 'vnemes';
    next();
});

router.get('/', async (req, res) => {
    try {
        const cart = await getShoppingCartForUser(res.locals.userId)
        res.send(JSON.stringify(cart, null, 2));
    } catch (err) {
        res.status(500).send("Cannot retrieve cart content. Error: " + JSON.stringify(err, null, 2));
    }
});

router.put('/product', async (req, res) => {
    try {
        await addProductToShoppingCart(res.locals.userId, req.body);
        res.status(200).send("Product added successfully");
    } catch (err) {
        res.status(400).send("Cannot add item to cart. Error: " + JSON.stringify(err, null, 2));
    }
});

router.delete('/product/:pid', async (req, res) => {
    try {
        await deleteProductFromShoppingCart(res.locals.userId, +req.params.pid);
        res.status(200).send("Product deleted successfully");
    } catch (err) {
        res.status(400).send("Cannot delete item from cart. Error: " + JSON.stringify(err, null, 2));
    }
});

export default router;