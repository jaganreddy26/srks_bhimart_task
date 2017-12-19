import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
 
@Component({
  selector: 'app-carousel',
  template: `
    <ngx-carousel [inputs]="carouselTile">
    <ngx-tile NgxCarouselItem *ngFor="let item of carouselTileItems">
            <span >
                    <img src="{{item.productPic}}" class="productPic">
                <div>
                    <label>{{item.ProductName}}</label>
                </div>
                
                <h6>{{item.MRP}} 
                  <span></span>
                  <span>
                    <s>({{item.SellignPrice}})</s>
                </span>
              </h6>
                <div class="green">
                  <img src="assets/shop.png" height="12px" width="12px">
                   <label>{{item.ShopName}}</label>
                  </div>
                  <div class="blue">
                      <img src="assets/location.png" height="12px" width="12px">
                      <label>{{item.Distance}}</label>
                  </div>
                
               
                  <div *ngIf="item.AvgRatingCount === 0">
                          <button class="pull-right col-xs-4" type="button" class="btn btn-lg btn-info" >Not Rated</button>
                        </div>
                      <div *ngIf="item.AvgRatingCount > 0">
                      <button class="pull-right col-xs-4" type="button" class="btn btn-lg btn-warning pdb" >
                        <label>{{item.AvgRatingCount}}</label>
                        <i class="fa fa-star" aria-hidden="true" style="color:black !important"></i>
                      </button><span>({{item.RatingCount}})</span>
                    </div>
                    
                     </span>
                </ngx-tile>
          <button NgxCarouselPrev class='leftRs'>&lt;</button>
          <button NgxCarouselNext class='rightRs'>&gt;</button>
    </ngx-carousel>
  `,
  styles: [`
  
    span{
      
        /* min-height: 300px; */
      /* background-color: #ccc;
      text-align: center; */
    }
    .leftRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        left: 0;
    }
 
    .rightRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        right: 0;
    }


  `]
})
export class CarouselComponent implements OnInit {
 
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  @Output()
  outputEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  inputData: any[] = [];


 
  ngOnInit(){
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
 
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const items = (changes as any).inputData || [];
    console.log(items);
    if ((changes as any).inputData != undefined && (items.previousValue != items.currentValue)) {
           this.carouselTileItems =  items.currentValue;
           console.log(this.carouselTileItems);
           this.outputEvent.next(this.carouselTileItems);
    }
  }
 
//   public carouselTileLoad(evt: any) {
 
//     const len = this.carouselTileItems.length;
//     if (len <= 30) {
//       for (let i = len; i < len + 10; i++) {
//         this.carouselTileItems.push(i);
//       }
//     }
 
//   }
 
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
 
}