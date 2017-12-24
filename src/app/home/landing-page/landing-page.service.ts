import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';


@Injectable()
export class LandingPageService {

  constructor(private http: HttpClient , private router: Router, private route: ActivatedRoute) { }
  

  signIn(data: any) {
    return this.http.post('https://customerapi.bhimart.com/UserRegistration/UserLogin', data);
  }
  signUp(data: any) {
    return this.http.post('https://customerapi.bhimart.com/UserRegistration/RegisterUser', data);
  }
  homeData() {
    return this.http.get('https://customerapi.bhimart.com/HomePage/GetHomePageData?pincode=560003&lat=12&lang=72');
  }
  navigate(url: String, params: any) {
    console.log("url: "+ url);
    if(params){
        let param:any = {};
        if(params instanceof Array){
            for(let i=0; i< params.length; i++){
                for(let key in params[i]){
                    param[key] = params[i][key];
                }
            }
        } else {
            param = params;
        }

        let navigationExtras: NavigationExtras = {
            queryParams: param
        };
        this.router.navigate([url], navigationExtras);
    } else {
        this.router.navigate([url]);
    }
    
}
getParam(key: string){
  // console.log(this.route.snapshot);
  //  this.route.params.subscribe(params => {console.log( parseInt(params['id'], 10) )});
  return this.route.snapshot.queryParams[key];
}


}
