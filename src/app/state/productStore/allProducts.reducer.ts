import {Product} from "../../interfaces/product.model";
import {createReducer, on} from "@ngrx/store";
import {ClearFiltersAction, ProductsActions} from "./allProducts.actions";
import {ProductStore} from "../../interfaces/initialState.state";


const initialState: ProductStore = {
  products: [],
  search: '',
  appearnce_product: [],
  category : [ 'office', 'living room', 'kitchen', 'bedroom', 'dining', 'kids'],
  category_selected: 'all',
  company : ['marcos', 'liddy', 'ikea', 'caressa'],
  company_selected : 'all',
  colors : ['#ff0000', '#00ff00', '#0000ff', '#000', '#ffb900'],
  color_selected: 'all',
  min_price : 0,
  max_price : 1,
  priceSelected : 0,
  free_shipping : true,
  sort_by : ['lower price', 'highest price', 'name (A - Z)', 'name (Z - A)'],
  sort_selected : 'none'
}

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.retrievedProductsList, (state, { products }) =>{
    let tempProduct : Product[];
    tempProduct = products;
    let max_price : number = 0; let min_price : number =  tempProduct[0].price;

    tempProduct.map( product => {
        if(product.price > max_price)
            max_price = product.price;
    })

    tempProduct.map( product => {
      if(product.price < min_price)
          min_price = product.price
    })
    return {...state, products: products, appearnce_product: products, min_price: min_price, max_price: max_price, priceSelected: max_price }
  } ),
  on(ProductsActions.retrievedProductsListByCategorie, (state, { categorie })=>{

    if(categorie === "all"){
      let new_tempProducts : Product[] = state.products;
      return {...state, category_selected: categorie, appearnce_product: new_tempProducts}
    }

    let tempProducts: Product[] = state.products
    tempProducts = tempProducts.filter((product)=> product.category === categorie)

    return {...state, category_selected: categorie, appearnce_product: tempProducts}
  }),
  on(ProductsActions.retrievedProductsListByCompany, (state, {company})=>{
    if(company === "all"){
      let new_tempProducts : Product[] = state.products;
      return {...state, company_selected: company, appearnce_product: new_tempProducts}
    }

    let tempProducts: Product[] = state.products
    tempProducts = tempProducts.filter((product)=> product.company === company)

    return {...state, company_selected: company, appearnce_product: tempProducts}
  }),
  on(ProductsActions.retrievedProductsListByColor, (state, {color})=>{

    if(color === "all"){
      let new_tempProducts : Product[] = state.products;
      return {...state, color_selected: color, appearnce_product: new_tempProducts}
    }

    let tempProducts: Product[] = state.products
    tempProducts = tempProducts.filter((product)=>product.colors?.find((c)=> c === color));

    return {...state, color_selected: color, appearnce_product: tempProducts}
  })
  ,
  on(ProductsActions.retrievedProductsListByPrice, (state, {price})=>{
      let tempProducts: Product[] = state.products;
      tempProducts = tempProducts.filter((product)=> product.price < price);
    return {...state, appearnce_product: tempProducts, priceSelected: price}
  })
  ,
  on(ProductsActions.retrievedProductsListByShipping, (state, {isFree})=>{
    let tempProducts: Product[] = state.products
    if(isFree)
          tempProducts = tempProducts.filter((product)=> product.shipping === true)

    return {...state, free_shipping: isFree, appearnce_product: tempProducts};
  }),
  on(ClearFiltersAction, (state)=>{
  let tempProduct : Product[] = state.products;
  let tempMaxPrice : number = state.max_price;
    return {...state, appearnce_product: tempProduct, category_selected: 'all', colors_selected: 'all', company_selected: 'all',free_shipping: true, priceSelected: tempMaxPrice, sort_selected: 'none'}
  }),
  on(ProductsActions.retrievedProductsListBySearch, (state, {keyWord})=>{
    let tempProduct : Product[] = state.products;
    tempProduct = tempProduct.filter( product => product.name?.includes(keyWord))

    return {...state, search: keyWord, appearnce_product: tempProduct}
  })

);
