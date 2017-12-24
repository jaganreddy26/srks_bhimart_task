import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../landing-page.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  productsList:any;
  shopList:any;
  categories:any;
  promotion:any;
  scrollList: any;
  carosuleList : any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor( private service: LandingPageService , private router: Router ) {
    this.homeData();
   }

  ngOnInit() {
  }
  homeData(){
    this.service.homeData().subscribe((data: any) => {
      console.log(data);
      this.productsList = data.Productlist.response;
      this.shopList = data.Shoplist.Response;
      this.categories = data.Categories.Response;
      this.promotion = data.Promotion.Response;
      console.log(this.shopList);
    });
  }
  products() {
    this.router.navigate(['allproducts']);
  }
  shops() {
    this.router.navigate(['allshops']);
  }
}
