import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from './routes';


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const port = process.env.PORT;


app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});

app.use('/cart', routes.cart);
app.use('/order', routes.order);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
})