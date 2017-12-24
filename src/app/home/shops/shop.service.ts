import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {

  constructor(private http: HttpClient) { }

  getAllShops() {
    return this.http.get('https://customerapi.bhimart.com/OpenApi/ViewMoreShopspagewise?lat=12&lang=72&pincode=560003&skipcount=1');
  }
  getallCatagories(){
    return this.http.get('https://customerapi.bhimart.com/OpenApi/GetAllCategories');
  }
 

}



