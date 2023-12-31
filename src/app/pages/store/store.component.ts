import {Component, OnInit} from '@angular/core';
import {AllProductsService} from "../../services/products/all-products.service";
import { Store} from "@ngrx/store";
import {ClearFiltersAction, ProductsActions} from "../../state/productStore/allProducts.actions";
import {selectAllState} from "../../state/productStore/allProducts.selectors";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  freeShipping : boolean = false;
  keyWord : string = ''
  productStore$ = this.store.select(selectAllState);
  pages?: any[];
  pageCurrentTemp?: number;

  constructor(private productsService: AllProductsService, private store:Store) {
  }

  ngOnInit(): void {
    this.getAllProducts(0)
     // get total pages
     this.productsService.getTotalPages().subscribe((total_pages)=>{
       this.store.dispatch(ProductsActions.getTotalPages({ total_pages }));
       this.pages = Array(total_pages+1).fill(0);
     })
  }
  categorie : string = ''
  filterByCategory(categorie:string){
    this.categorie = categorie
    this.store.dispatch(ProductsActions.retrievedProductsListByCategorie({ categorie }))
  }
  filterByCompany(event:any){
    let company : string = event.target.value
    this.store.dispatch(ProductsActions.retrievedProductsListByCompany({ company }))
  }
  filterByColor(color:string){
    this.store.dispatch(ProductsActions.retrievedProductsListByColor({ color }))
  }

  filterByShipping(){
    this.freeShipping = !this.freeShipping
    let isFree = this.freeShipping;
    this.store.dispatch(ProductsActions.retrievedProductsListByShipping({ isFree }))
  }
  filterByPrice(event: any){
    let price = event.target.value;
    this.store.dispatch(ProductsActions.retrievedProductsListByPrice({ price }))
  }
  clearFilters(){
    this.store.dispatch(ClearFiltersAction())
  }

  filterByKeyWord(event:any){
    let keyWord : string = event.target.value

    this.store.dispatch(ProductsActions.retrievedProductsListBySearch({ keyWord }))
  }
  getAllProducts(pageCurrent:any){
     this.pageCurrentTemp= parseInt(pageCurrent)

    this.productsService.getAllProducts(this.pageCurrentTemp).subscribe((products)=>{
      this.store.dispatch(ProductsActions.retrievedProductsList({ products }))
    })
  }
}
