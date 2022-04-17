import axios from "axios";
import { CART_API_ROOT, CART_PRODUCT_ENDPOINT } from "../constants";
import { Product } from "../model/Product";


export const addToCart = async (product: Product) => {
    try {
        const resp = await axios.put(`${CART_API_ROOT}${CART_PRODUCT_ENDPOINT}`, product);
        if (!resp)
            console.error("Error adding to cart!");
    } catch (e) {
        console.error(e);
        throw e;
    }
}