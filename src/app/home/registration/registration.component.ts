import { Component, OnInit } from '@angular/core';
import { Signup } from '../../shared/entities/signup';
import { LandingPageService } from '../landing-page/landing-page.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signup: Signup = new Signup();

  constructor(private service: LandingPageService ) { }

  ngOnInit() {
  }
  signUp() {
    this.service.signUp(this.signup).subscribe(data => {
      console.log(data);
    });
  }

}
