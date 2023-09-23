import {createActionGroup, props} from "@ngrx/store";
import {Product} from "../../interfaces/product.model";


export const FeaturedProductsActions = createActionGroup({
  source: 'Featured Products',
  events: {
    'Retrieved Featured Product List': props<{ products: Array<Product> }>(),
  }
})
