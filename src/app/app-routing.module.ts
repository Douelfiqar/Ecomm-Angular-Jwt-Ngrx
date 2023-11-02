import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {StoreComponent} from "./pages/store/store.component";
import {ArticleComponent} from "./pages/article/article.component";
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginPageGuard } from './guards/login-page.guard';

const routes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: StoreComponent},
  { path: 'product/:id', component: ArticleComponent },
  { path: 'cart', component: CartComponent},
  { path: 'login', component: LoginComponent, canActivate: [LoginPageGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthenticationGuard]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
