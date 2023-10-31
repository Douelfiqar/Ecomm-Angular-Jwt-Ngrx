import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/product.model";
import {Store} from "@ngrx/store";
import {FeaturedProductsService} from "../../services/featured-products.service";
import { CartAction } from 'src/app/state/cart/cart.actions';
import { Cart } from 'src/app/interfaces/cart.state';
import { SingleProductCart } from 'src/app/interfaces/singleCart.model';
import { selectProductCart } from 'src/app/state/cart/cart.selectors';
import { filter } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  id:string = '';
  product ?: Product;
  imgSelected?:string;
  colorSelected:string = '';
  productToAddCart?:Cart;
  singleProductCart?:SingleProductCart
  tst?: SingleProductCart[] ;
  quantity:number = 1

  constructor(private route: ActivatedRoute, private store: Store, private prodService:FeaturedProductsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.prodService.getSingleProduct(this.id).subscribe(prod=>{
        this.product = prod
        this.imgSelected = prod?.imgUrl?.[0]
        this.colorSelected = prod?.colors?.[0]
      })
    })

  }

  changeSelectedImg(index:number){
    this.imgSelected = this.product?.imgUrl?.[index]
  }

  changeSelectedColor(color:string){
    this.colorSelected = color
  }
  prodSearched ?: SingleProductCart;
  addCart(quantityParametre: number, color: string){

    let cartProduct$ = this.store.select(selectProductCart)
    
    let product = cartProduct$.forEach((prod)=>{
      this.prodSearched = prod.productsCart.find(prod=> {
        return prod?.product?.id === this.id})
    })
    
    let koko = {
      ...this.prodSearched,
    }
    

    if(this.prodSearched){

      let verifyColor = this.prodSearched.color.find( c => {return c === color})
      let tab = [...this.prodSearched.color]
      if(!verifyColor){
        tab.push(color)
      }
      let koko = {
        ...this.prodSearched,
        quantity: this.prodSearched.quantity + quantityParametre,
        color: tab
      }
      
      this.store.dispatch(CartAction.addCart({singleProductCart: koko}))

    }else{
      let convertColorToArray = []
      convertColorToArray.push(color)
      this.singleProductCart = {
        product: this.product,
        quantity: quantityParametre,
        color: convertColorToArray
      }

      this.store.dispatch(CartAction.addCart({singleProductCart: this.singleProductCart}))
    }

  }

  increaseQuantity(){
    this.quantity = this.quantity + 1
  }
  decreaseQuantity(){
    if(this.quantity !== 1)
        this.quantity = this.quantity - 1
  }
}