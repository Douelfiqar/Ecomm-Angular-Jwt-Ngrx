import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Auth } from 'src/app/interfaces/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { selectAuth } from 'src/app/state/auth/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleNav: boolean = false;
  isAuth?: boolean;

  constructor(private store: Store, private authService:AuthService) {
    this.store.select(selectAuth)
      .pipe(
        map((auth: Auth) => auth.isAuth)
      )
      .subscribe((isAuthenticated: boolean) => {
        this.isAuth = isAuthenticated;
      });
  }

  ngOnInit(): void {
  }

  toggleNavFunction():void{
    this.toggleNav = !this.toggleNav;
  }

   logout(){
    this.authService.logout();
   }

}
