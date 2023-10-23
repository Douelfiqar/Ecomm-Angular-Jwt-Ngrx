import { createAction, createActionGroup, props } from "@ngrx/store";
import { SingleProductCart } from "src/app/interfaces/singleCart.model";

export const CartAction = createActionGroup({
    source: 'cart',
    events:{
        'Add Cart': props<{singleProductCart: SingleProductCart}>(),
        'Remove Cart': props<{product_id: String}>(),
        'Update Cart': props<{product: SingleProductCart}>()
    }
})

export const ReadCart = createAction('Read Cart')
export const ClearCart = createAction('Clear Cart')