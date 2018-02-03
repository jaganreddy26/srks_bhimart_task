import { Component, OnInit } from '@angular/core';
import { ShopDetailsService } from './shop-details.service';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  paramId: any;
  datalist:any = [];
  images:any;
  catgories:any;
  catId:any;
  products:any;
  lat: Number ;
  lng: Number ;
  latitude:Number;
  longitude:Number;
  zoom: Number ;
  isStatus:boolean;
   index: number = 0;
  dir = undefined;
 

  constructor( private shopDetailsService: ShopDetailsService) {
    this.paramId = this.shopDetailsService.getParamId();
    console.log(this.paramId);
    this.shopDetails();
    this.setCurrentPosition();
   }
  ngOnInit() {
  
  }
  
  
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        console.log(this.lat);
        this.getDirection();
  
      });
    }
  }
  shopDetails() {
    this.shopDetailsService.getShopListProducts(this.paramId).subscribe((data: any) => {
      this.datalist = data.retobj;
    
     
      console.log(this.datalist);
      this.images = this.datalist.Shopimg;
      this.catgories = this.datalist.Shopcat;
      console.log(this.datalist.lat);
      console.log(this.datalist.lang);
      this.lat = this.datalist.lat;
      this.lng = this.datalist.lang;
        this.catId = this.datalist.Shopcat[0].catId;
        console.log(this.catId);
         this.getProducts(this.catId , this.paramId);
         this.getDirection();
    });
  }
  
  getDirection() {
    this.dir = {
      origin: { lat: this.latitude, lng: this.longitude},
      destination: { lat: this.lat, lng: this.lng},
    }
    console.log(this.dir);
  }
  
  tabsInfo(item: any) {
    item.active = true;
    this.getProducts(item.catId , this.paramId);
  }
  // getProducts(catId: any, shopId: any, firstTime: boolean ) {
  //    this.shopDetailsService.getShopproducts(catId, shopId).subscribe((data: any) => {
  //    this.products = Object.assign([], data.response);
    
  //     if(this.products.length == 0 && firstTime == true) {
  //       this.index++;

  //       if(this.datalist.Shopcat.length-1 >= this.index){
  //         this.catId = this.datalist.Shopcat[this.index].catId;

  //          this.getProducts(this.catId , this.paramId, firstTime);
  //       } else {
  //         this.datalist.Shopcat[0].active = true;
  //       }
  //     } else if(firstTime == true){
  //       this.datalist.Shopcat[this.index].active = true;
  //     }
  //    this.isStatus = data.IsStatus;

  //   });
  // }
  getProducts(catId: any, shopId: any){

  }
  }


