import {createAction, createActionGroup, props} from "@ngrx/store";
import {Product} from "../../interfaces/product.model";

export const ProductsActions = createActionGroup({
  source: 'Products API',
  events: {
    'Retrieved Products List': props<{ products: Array<Product> }>(),
    'Retrieved Products List By Categorie': props<{ categorie: string}>(),
    'Retrieved Products List By Company': props<{ company: string}>(),
    'Retrieved Products List By Color': props<{ color: string}>(),
    'Retrieved Products List By Price': props<{ price: number}>(),
    'Retrieved Products List By Shipping': props<{ isFree: boolean}>(),
    'Retrieved Products List By Search': props<{ keyWord: string}>(),
    'Get Total Pages': props<{total_pages: number}>()
  },
});
export const ClearFiltersAction = createAction('[Filter] Clear Filters');

export const SortByLowerPrice = createAction('Retrieved Product List By Lower Price')
export const SortByHighestPrice = createAction('Retrieved Product List By Highest Price')
export const SortNameAZ = createAction('Retrieved Product List By Name A-Z')
export const SortNameZA = createAction('Retrieved Product List By Name Z-A')
