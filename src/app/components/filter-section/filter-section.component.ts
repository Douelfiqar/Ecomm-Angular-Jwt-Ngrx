import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllState, selectSortBy} from "../../state/productStore/allProducts.selectors";

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent {
    sortOptions$ = this.store.select(selectSortBy);

    constructor(private store: Store) {
    }

}
