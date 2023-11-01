import { createReducer, on } from "@ngrx/store";
import { Cart } from "src/app/interfaces/cart.state";
import { CartAction, ClearCart } from "./cart.actions";


const initialState: Cart = {
    productsCart: []
}

export const cartReducer = createReducer(initialState,
    on(CartAction.addCart, (state, {singleProductCart})=>{

        const tempArray = [...state.productsCart];
        
        // remove the old product if he exist
        let newArray =  tempArray.filter(prod=>{return prod.product?.id !== singleProductCart.product?.id})

        newArray.push(singleProductCart)
        return {...state, productsCart: newArray}
    }),
    on(CartAction.removeCart, (state, { product_id })=>{

        const tempArray = [...state.productsCart];
        let newTempArray = tempArray.filter((productLoop)=> product_id !== productLoop.product?.id)
        return {...state, productsCart: newTempArray}
    }),
    on(CartAction.updateCart, (state, {product})=>{
        const tempArray = [...state.productsCart];
        tempArray.filter((productLoop)=> product.product?.id !== productLoop.product?.id)
        tempArray.push(product)
        return {...state, productsCart: tempArray}
    }),on(ClearCart, (state)=>{
        return {...state, productsCart : []}
    })
)