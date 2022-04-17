import axios from "axios";
import { CART_API_ROOT, SUBMIT_ORDER_ENDPOINT } from "../constants";
import { Product } from "../model/Product";


export const submitOrder = async (cartContent: Product[]) => {
    try {
        const resp = await axios.post(`${CART_API_ROOT}${SUBMIT_ORDER_ENDPOINT}`, cartContent);
        if (!resp)
            console.error("Error submitting order!");
    } catch (e) {
        console.error(e);
        throw e;
    }
}