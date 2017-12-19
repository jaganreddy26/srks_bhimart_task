import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('https://customerapi.bhimart.com/OpenApi/ViewProductspagewise?pincode=560003&lat=12&lang=72&StartIndex=1');
  }

}
