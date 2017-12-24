import { Injectable } from '@angular/core';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import { LandingPageService } from '../landing-page/landing-page.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShopDetailsService {

  constructor( private http: HttpClient,
                 private router: Router ,
                 private route: ActivatedRoute ,
                 private landingPageService : LandingPageService ) { }

  getParamId() {
    return this.landingPageService.getParam('id');
  }
  getShopListProducts(data: any) {
    return this.http.get('https://customerapi.bhimart.com/OpenApi/SelectedShopdetails?lat=12.00&lang=77.00&ShopId=' + data);
  }
  getShopproducts(catId: any, ShopId: any) {
    const url = 
    'https://customerapi.bhimart.com/OpenApi/ShopListProducts?CategoryId='+catId +'&ShopId='+ShopId + '&lat=12.00&lang=77.00';
    return this.http.get(url);
  }



}
