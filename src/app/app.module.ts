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
import {HttpClientModule} from "@angular/common/http";
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
import { ArticleComponent } from './components/article/article.component';

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
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({ featuredProducts: featuredProductsReducer, allProduct: productsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
