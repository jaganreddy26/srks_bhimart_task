import { Component, OnInit } from '@angular/core';
import { Signin } from '../../shared/entities/signin';
import { LandingPageService } from '../landing-page/landing-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string  = null;
  sigin: Signin = new Signin();
  constructor( private service: LandingPageService) { }

  ngOnInit() {
  }
  signIn() {
    this.service.signIn(this.sigin).subscribe( (data: any) => {
      if(!data.isStatus) {
        this.message = data.Response.MobileNumber;
      } else {

      }
      console.log();
    });
  }

}
