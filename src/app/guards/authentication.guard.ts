import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuth } from '../state/auth/auth.selectors';
import { Auth } from '../interfaces/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

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

  ngOnInit() {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isAuth === true){
        return true;
      }
      this.router.navigateByUrl("/login")
      return false
  }
  
}
