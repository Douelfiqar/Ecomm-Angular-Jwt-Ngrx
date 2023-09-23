import {Component, Input, OnInit} from '@angular/core';
import {FeaturedProductsService} from "../../services/featured-products.service";
import {Store} from "@ngrx/store";
import {selectProducts} from "../../state/featuredProduct/products.selectors";
import {FeaturedProductsActions} from "../../state/featuredProduct/products.actions";

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  products = this.store.select(selectProducts)

  constructor(private featuredProductsService:FeaturedProductsService, private store:Store) {
  }

  ngOnInit(){
    this.featuredProductsService.getFeaturedProducts()
      .subscribe((products)=>
      this.store.dispatch(FeaturedProductsActions.retrievedFeaturedProductList({ products }))
      )
  }
}
