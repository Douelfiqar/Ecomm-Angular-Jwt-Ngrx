import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Product} from "../../interfaces/product.model";
import {ProductStore} from "../../interfaces/initialState.state";

export const selectAllState = createFeatureSelector<ProductStore>('allProduct');

export const selectSortBy = createSelector(
  selectAllState,
  (state: ProductStore) => state.sort_by
);

export const selectTempProducts = createSelector(
  selectAllState,
  (state: ProductStore) => state.appearnce_product
)
