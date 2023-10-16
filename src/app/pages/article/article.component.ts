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
  imgSelected?:string;
  colorSelected?:string;
  constructor(private route: ActivatedRoute, private store: Store, private prodService:FeaturedProductsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.prodService.getSingleProduct(this.id).subscribe(prod=>{
        this.product = prod
        this.imgSelected = prod?.imgURL?.[0]
        this.colorSelected = prod?.colors?.[0]
      })
    })

  }

  changeSelectedImg(index:number){
    this.imgSelected = this.product?.imgURL?.[index]
  }
  changeSelectedColor(color:string){
    this.colorSelected = color
  }


}
