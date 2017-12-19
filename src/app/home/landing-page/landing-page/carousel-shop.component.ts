import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
 
@Component({
  selector: 'app-carousel-shop',
  template: `
    <ngx-carousel [inputs]="carouselTile">
    <ngx-tile NgxCarouselItem *ngFor="let item of carouselTileItems">
    <div class="tile">
            <span >
            <div style="padding-top:26px !important">

            <img src="{{item.ShopPic}}" class="productPic">
                <div>
                    <label>{{item.ShopName}}</label>
                </div>
                  <div class="blue">
                      <img src="assets/location.png" height="12px" width="12px">
                      <label>{{item.distance}}</label>
                  </div>
                  <div *ngIf="item.RatingAvg === 0">
                          <button class="pull-right col-xs-4" type="button" class="btn btn-lg btn-info" >Not Rated</button>
                        </div>
                      <div *ngIf="item.RatingAvg > 0">
                      <button class="pull-right col-xs-4" type="button" class="btn btn-lg btn-warning pdb">
                        <label>
                          {{item.RatingAvg}}
                      </label>
                        <i class="fa fa-star" aria-hidden="true" style="color:black !important"></i>
                      </button>
                      <span>({{item.RatingCount}})</span>
                    </div>
                    </div>
                     </span>
        </div>
                </ngx-tile>
          <button NgxCarouselPrev class='leftRs'>&lt;</button>
          <button NgxCarouselNext class='rightRs'>&gt;</button>
    </ngx-carousel>
  `,
  styles: [`
  .tile{
        height: 269px !important;
        box-shadow: transparent !important;
        padding-bottom: 20px;
    }
 
    span{
        min-height: 200px;
      background-color: #ccc;
      text-align: center;
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

    slide{
        height: auto;
    }
    .padding{
        padding:6px;
    }
    .box{
        background-color: #fefefe;
        padding: 12px;
    }
    .padding-top{
        padding-top:20px;
    }
    .margin-top{
        margin-top:20px;
    }
    button{
        font-size: 12px;
        cursor:pointer;
    }
    @media only screen and (max-width: 1000px) {
        .media {
            height:100px;
            width:auto;
        }
        h3{
            font-size: 16px;
        }
        
    }
    .productPic{
        height: 126px;
        width: 100px;
        /* position: absolute; */
        margin: auto;
       
    }
    .cards{
        height: 296px;
        width: 366px;
        text-align: center;
    }
    label{
        font-size: 12px;
    }
    .green{
        color:#bbd3a2;
    }
    .blue{
        color:#90b7dd;
    }
    .pdb{
        padding-bottom: 1px !important;
    }
    

  `]
})
export class CarouselShopComponent implements OnInit {
 
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