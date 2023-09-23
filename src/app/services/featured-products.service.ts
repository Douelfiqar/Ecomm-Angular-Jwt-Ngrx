import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../env/env";
import {map, Observable} from "rxjs";
import {Product} from "../interfaces/product.model";

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService {

  private domain:string | undefined;
  private link:string = "http://localhost:8080/getAllProducts";
  constructor(private http:HttpClient) {
    this.domain = env.domain;
  }

  getFeaturedProducts():  Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.domain}featuredProducts`);
  }

}
