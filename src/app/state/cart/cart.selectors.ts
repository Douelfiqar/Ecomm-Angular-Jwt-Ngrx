import { createFeatureSelector } from "@ngrx/store";
import { Cart } from "src/app/interfaces/cart.state";

export const selectProductCart = createFeatureSelector<Cart>('cart')
