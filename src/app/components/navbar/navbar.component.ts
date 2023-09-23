import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleNav: boolean = false;

  toggleNavFunction():void{
    this.toggleNav = !this.toggleNav;
  }

}
