import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTempProducts} from "../../state/productStore/allProducts.selectors";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    TempProducts$ = this.store.select(selectTempProducts);
    constructor(private store: Store) {
    }


}
