import { Product } from "./Product";

export interface Order {
    user: string,
    products: Product[],
}