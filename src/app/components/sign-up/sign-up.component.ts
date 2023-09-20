import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  user: User = new User();

  msg: any = '';
  constructor(private service: UserService, private router: Router) { }
  ngOnInit() {

  };
  submitForm() {
    this.save();
  }
  save() {
    this.service.createUser(this.user).subscribe((data) => {
      console.log("Response received");
      this.msg = "Registration Successfully";
      this.gotoList();
    }, (error) => {
      console.log("Exception occured");
      this.msg = error.error;
    });

  }
  gotoList() {
    this.router.navigate(['login']);
  }

}
