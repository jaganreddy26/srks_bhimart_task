import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { LandingPageService } from './landing-page/landing-page.service';

import { SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { ProductsComponent } from './products/products/products.component';
import { ShopsComponent } from './shops/shops/shops.component';
import { ProductService } from './products/product.service';
import { ShopService } from './shops/shop.service';

import {CarouselFeatureComponent} from './landing-page/landing-page/carousel-feature.component';
import {CarouselShopComponent} from './landing-page/landing-page/carousel-shop.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'allproducts',   component: ProductsComponent},
  { path: 'allshops',  component: ShopsComponent},




];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
    ],
  providers: [LandingPageService, ProductService , ShopService],
  declarations: [LandingPageComponent,
     AboutUsComponent, ContactUsComponent,
      LoginComponent, RegistrationComponent,
       AuthComponent, ProductsComponent, ShopsComponent,
       CarouselFeatureComponent, CarouselShopComponent
      ],
  exports: [RouterModule, AuthComponent],
})
export class HomeModule { }