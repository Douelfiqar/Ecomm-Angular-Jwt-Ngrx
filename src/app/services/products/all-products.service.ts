import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../../env/env";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product.model";

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {
  domain?: string;
  constructor(private http: HttpClient) {
      this.domain = env.domain
  }

  getAllProducts(pageCurrent:number): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.domain}getAllProducts?pageCurrent=${pageCurrent}`);
  }
  getTotalPages(): Observable<number>{
    return this.http.get<number>(`${this.domain}getCountProduct`)
  }
}
