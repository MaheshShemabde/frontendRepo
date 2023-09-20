import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: User=new User();
  msg='';
  constructor(private service:UserService, private router:Router){};

  ngOnInit() {
  };

  loginUser(){
    this.service.loginUser(this.user).subscribe((data)=>{
      console.log("Response received");
      this.router.navigate(['/navbar']);
    },error=>{
      console.log("Exception occured");
      this.msg="Bad Credentials, please enter valid data";
    });
  };

  gotoSignUp(){
    this.router.navigate(['/signUp']);
  }


}
