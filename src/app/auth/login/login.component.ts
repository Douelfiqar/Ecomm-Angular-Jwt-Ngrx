import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Auth } from 'src/app/interfaces/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin! : FormGroup;
  
  register:boolean = false;

  badCredentialsLogin: boolean = false;
  badCredentialsRegistration: boolean = false;

  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router){} 

  ngOnInit(): void {
    
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),
      confirm_password : this.fb.control(""),
      name: this.fb.control(""),
      email : this.fb.control(""),
      phone_number : this.fb.control(""),
    })
  }

  handleLogin(){
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password

    if(this.register === false){
      
      this.authService.login(username, pwd).subscribe({
        next : data => {
          console.log(data);
          this.authService.loadProfile(data);
          
          this.router.navigateByUrl("/store")
        },
        error : err => {
          this.badCredentialsLogin = true;
          console.log(err);
        }
      })

    }else{
      let name = this.formLogin.value.name;
      let email = this.formLogin.value.email
      let phone_number = this.formLogin.value.phone_number

      this.authService.register(username, pwd, name, email, phone_number).subscribe({
        next : data => {
          this.authService.loadProfile(data);
          this.router.navigateByUrl("/store")
        },
        error : err => {
          this.badCredentialsRegistration = true
          console.log(err);
        }
      })
    }
  }

  switchMethodeLogin() {
    this.register = !this.register
    if(!this.register){
      this.badCredentialsRegistration = false
      this.badCredentialsLogin= false}
    else{
      this.badCredentialsLogin= false
      this.badCredentialsRegistration = false
    }
  }
  
  logout(){
    this.authService.logout()
  }

  checkConfirmingPwd():boolean{
    if(this.formLogin.value.password !== this.formLogin.value.confirm_password)
      return false
    return true;
  }

}
