import {Product} from "../../interfaces/product.model";
import {createReducer, on} from "@ngrx/store";
import {FeaturedProductsActions} from "./products.actions";

export const initialState: Array<Product> = []

export const featuredProductsReducer = createReducer(
  initialState,
  on(FeaturedProductsActions.retrievedFeaturedProductList, (_state, { products }) => products),

)
