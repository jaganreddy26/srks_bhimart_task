import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shopsList:any;

  constructor(private shopService:ShopService) {
    this.getAllShops()
   }

  ngOnInit() {
  }
  getAllShops() {
    this.shopService.getAllShops().subscribe((data: any ) => {
      console.log(data);
      this.shopsList = data.shops.Response;
    });
  }

}
