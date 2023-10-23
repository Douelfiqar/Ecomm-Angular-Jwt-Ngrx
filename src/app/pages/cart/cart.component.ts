import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartAction, ClearCart } from 'src/app/state/cart/cart.actions';
import { selectProductCart } from 'src/app/state/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  

  cartProduct$ = this.store.select(selectProductCart)

  constructor(private store: Store){
  }
  ngOnInit(): void {
  }

  clearCart(){
    this.store.dispatch(ClearCart())
  }

  deleteItem(id:any){
    console.log("delete");
    this.store.dispatch(CartAction.removeCart({product_id: id}))
  }

}
