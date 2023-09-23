import {createFeatureSelector} from "@ngrx/store";
import {Product} from "../../interfaces/product.model";

export const selectProducts = createFeatureSelector<Array<Product>>('featuredProducts')
