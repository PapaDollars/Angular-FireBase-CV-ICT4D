import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public firebaseservice : FirebaseService) { }
  email : string = "";
  password : string = "";
  isSignedIn = false
  public isConnection = true
  isRegister = true
  ngOnInit() {
    if(localStorage.getItem("user")!= null)
     {
      this.isSignedIn = true
      this.isConnection = false
      this.isRegister = false
     }
     else
     this.isSignedIn = false
  }
  async onssignedup(){
    await this.firebaseservice.signup(this.email,this.password)
    if(this.firebaseservice.isloggedIn)
    this.isSignedIn = true;
  }

  async onssignedin(){
    await this.firebaseservice.signin(this.email,this.password)
    if(this.firebaseservice.isloggedIn)
    this.isSignedIn = true;
  }

  handlelogout(){
    this.isSignedIn = false
  }

}
