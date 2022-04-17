import { Router } from "express";
import { Order } from "../model/Order";
import { placeOrder } from "../service/orderSQSService";

const router = Router();

router.all('/**', (req, res, next) => {
    // middleware to perform authentication and everything else
    // in our example, set a mock user id
    res.locals.userId = 'vnemes';
    next();
});

router.post('/', async (req, res) => {
    const order:Order = {
        user: res.locals.userId,
        products: req.body
    }
    try {
        const id = await placeOrder(order);
        res.status(200).send(`Order with id ${id} placed successfully`);
    } catch (e) {
        res.status(500).send(`Cannot place order. Error: ${JSON.stringify(e, null, 2)}`);
    }
});

export default router;