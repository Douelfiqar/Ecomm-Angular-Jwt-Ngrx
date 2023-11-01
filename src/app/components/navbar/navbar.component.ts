import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Auth } from 'src/app/interfaces/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { authState } from 'src/app/state/auth/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleNav: boolean = false;
  isAuth:boolean = false;
  stateAuth$ = this.store.select(authState)

  constructor( private authService:AuthService, private store:Store) {
  }
  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated
  }

  toggleNavFunction():void{
    this.toggleNav = !this.toggleNav;
  }

   

}
