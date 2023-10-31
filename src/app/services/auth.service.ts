import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain?: string;
  isAuthenticated:boolean = false;
  roles:any;
  username:any;
  accessToken!:string;

  constructor(private http:HttpClient) {
    this.domain = env.domain
   }
  
  public login(username:string, password:string){

    let option = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }

    let params = new HttpParams().set("username",username).set("password", password)
    
    return this.http.post(this.domain+"login", params, option)
  }

  loadProfile(data: any) {
    this.isAuthenticated = true
    this.accessToken = data['accessToken']
    let decodeJwt:any = jwtDecode(this.accessToken)
    this.username = decodeJwt.sub;
    this.roles = decodeJwt.scope;
  }
}
