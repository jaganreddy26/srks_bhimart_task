import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ShopService } from './home/shops/shop.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  allcatagories:any;

  /**
   * for model popup
   */
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService , private shopService:ShopService) {
  this.getAllCatagories();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getAllCatagories(){
    this.shopService.getallCatagories().subscribe((data:any)=> {
      console.log(data);
      this.allcatagories = data.res;
    });
}
}
