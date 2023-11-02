import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeroSectionComponent } from './components/hero-section/hero-section.component'
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { StoreModule } from '@ngrx/store';
import {featuredProductsReducer} from "./state/featuredProduct/products.reducer";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutComponent } from './pages/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { productsReducer } from "./state/productStore/allProducts.reducer";
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { ProductsComponent } from './components/products/products.component';
import { ArticleComponent } from './pages/article/article.component';
import { CommonModule } from '@angular/common';
import { cartReducer } from './state/cart/cart.reducer';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { authReducer } from './state/auth/auth.reducer';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroSectionComponent,
    FeaturedProductsComponent,
    OurServicesComponent,
    ContactUsComponent,
    FooterComponent,
    StoreComponent,
    AboutComponent,
    BannerComponent,
    FilterSectionComponent,
    ProductsComponent,
    ArticleComponent,
    CartComponent,
    LoginComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({ featuredProducts: featuredProductsReducer, allProduct: productsReducer, cart: cartReducer, auth: authReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
