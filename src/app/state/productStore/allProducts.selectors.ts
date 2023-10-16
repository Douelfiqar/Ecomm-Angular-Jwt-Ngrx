import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductStore} from "../../interfaces/initialState.state";

export const selectAllState = createFeatureSelector<ProductStore>('allProduct');

export const selectSortBy = createSelector(
  selectAllState,
  (state: ProductStore) => state.sort_by
);

export const selectTempProducts = createSelector(
  selectAllState,
  (state: ProductStore) => state.appearnce_product
);
