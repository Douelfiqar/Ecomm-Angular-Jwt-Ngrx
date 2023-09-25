import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllState, selectSortBy} from "../../state/productStore/allProducts.selectors";
import {
  SortByHighestPrice,
  SortByLowerPrice,
  SortNameAZ,
  SortNameZA
} from "../../state/productStore/allProducts.actions";

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent {
    sortOptions$ = this.store.select(selectSortBy);

    constructor(private store: Store) {
    }

    sortByLowerPrice(){
      this.store.dispatch(SortByLowerPrice())
    }
    sortByHighestPrice(){
      this.store.dispatch(SortByHighestPrice())
    }
    sortFunction(event: any){
      let value = event.target.value
      if(value === "lower price")
        this.store.dispatch(SortByLowerPrice())
      if(value === "highest price")
        this.store.dispatch(SortByHighestPrice())
      if(value === "name (A - Z)")
        this.store.dispatch(SortNameAZ())
      if(value === "name (Z - A)")
        this.store.dispatch(SortNameZA())
    }

}
