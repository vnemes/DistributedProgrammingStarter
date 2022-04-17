import axios from "axios";
import { CART_API_ROOT, CART_ENDPOINT } from "../constants";
import { Product } from "../model/Product";


export const getCartContent = async () => {
    return await axios.get<Product[]>(`${CART_API_ROOT}${CART_ENDPOINT}`)
}