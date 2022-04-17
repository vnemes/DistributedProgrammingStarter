import axios from "axios";
import { CART_API_ROOT, CART_PRODUCT_ENDPOINT } from "../constants";


export const removeFromCart = async (id: number) => {
    try {
        const resp = await axios.delete(`${CART_API_ROOT}${CART_PRODUCT_ENDPOINT}/${id}`,);
        if (!resp)
            console.error("Error removing from cart!");
    } catch (e) {
        console.error(e);
        throw e;
    }
}