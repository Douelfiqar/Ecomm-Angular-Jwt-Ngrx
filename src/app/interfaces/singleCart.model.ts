import { Product } from "./product.model";

export interface SingleProductCart{
    product?:Product,
    quantity: number,
    color: string[]
}