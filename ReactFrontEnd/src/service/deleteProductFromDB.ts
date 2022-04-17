import axios from "axios";

import { API_ROOT, PRODUCT_ENDPOINT } from "../constants";


   export const deleteProductFromDB = async (id:number) => {
        try {
            const resp = await axios.delete(`${API_ROOT}${PRODUCT_ENDPOINT}/${id}`);
            return resp;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }