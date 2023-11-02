import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuth } from '../state/auth/auth.selectors';
import { Auth } from '../interfaces/auth.model';

@Injectable({
  providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {
  isAuth?: boolean;

  constructor(private store: Store, private router:Router) {
    this.store.select(selectAuth)
      .pipe(
        map((auth: Auth) => auth.isAuth)
      )
      .subscribe((isAuthenticated: boolean) => {
        this.isAuth = isAuthenticated;
      });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.isAuth){
      this.router.navigateByUrl("/store")
        return false;
      }
      console.log(this.isAuth);
      return true
  }
}
