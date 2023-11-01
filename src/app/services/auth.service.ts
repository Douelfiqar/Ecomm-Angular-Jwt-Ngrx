import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import jwtDecode from 'jwt-decode';
import { Auth } from '../interfaces/auth.model';
import { Store } from '@ngrx/store';
import { authReducer } from '../state/auth/auth.reducer';
import { AuthActions } from '../state/auth/auth.action';
import { authState } from '../state/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain?: string;
  isAuthenticated:boolean = false;
  roles:any;
  username:any;
  accessToken!:string;

  constructor(private http:HttpClient, private store:Store) {
    this.domain = env.domain
   }
  
  public login(username:string, password:string){

    let option = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }

    let params = new HttpParams().set("username",username).set("password", password)
    
    return this.http.post(this.domain+"login", params, option)
  }

  public register(username:string, password:string, name:string, email:string, phone_number:string){
    let option = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }

    let params = new HttpParams().set("username",username).set("password", password).set("name", name).set("email",email).set("phone_number", phone_number)
    
    return this.http.post(this.domain+"signup", params, option)
  }

  loadProfile(data: any) {
    this.isAuthenticated = true
    this.accessToken = data['accessToken']
    let decodeJwt:any = jwtDecode(this.accessToken)
    this.username = decodeJwt.sub;
    this.roles = decodeJwt.scope;
    console.log(decodeJwt);
    let auth:Auth = {
      isAuth: true,
      username : decodeJwt.sub,
      jwt: data['accessToken'],
      roles : decodeJwt.scope
    }
    this.store.dispatch(AuthActions.setAuthParams({auth}))
  }
  
  logout(){
    this.isAuthenticated = false;
    this.roles = null;
    this.username = null;
    this.accessToken = "";
  }
}
