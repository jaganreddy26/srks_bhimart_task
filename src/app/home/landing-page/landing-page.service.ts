import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LandingPageService {

  constructor(private http: HttpClient) { }
  

  signIn(data: any) {
    return this.http.post('https://customerapi.bhimart.com/UserRegistration/UserLogin', data);
  }
  signUp(data: any) {
    return this.http.post('https://customerapi.bhimart.com/UserRegistration/RegisterUser', data);
  }
  homeData() {
    return this.http.get('https://customerapi.bhimart.com/HomePage/GetHomePageData?pincode=560003&lat=12&lang=72');
  }

}
