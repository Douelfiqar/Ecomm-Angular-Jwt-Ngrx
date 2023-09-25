import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/product.model";
import {Store} from "@ngrx/store";
import {FeaturedProductsService} from "../../services/featured-products.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  id:string = '';
  product ?: Product;

  constructor(private route: ActivatedRoute, private store: Store, private prodService:FeaturedProductsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)

      this.prodService.getSingleProduct(this.id).subscribe(prod=>{
        this.product = prod
        console.log(this.product)
      })
    })

  }



}
