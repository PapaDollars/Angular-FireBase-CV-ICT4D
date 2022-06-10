import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { EmailserviceService } from '../emailservice.service';
import { LocalizedString } from '@angular/compiler';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public firebaseservice : FirebaseService,public emailsend : EmailserviceService,public cruds : FirebaseService ) { }
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
    let information ={
      "noms": "Ex: Nyobe",
      "prenoms": "Ex: Le resistant",
      "dateNaissance": "Ex: 01/01/2000",
      "lieuNaissance": "Ex: Douala",
      "adresse": "Ex: Rue de la paix",
      "occupation": "Ex: Web developper",
      "photo": "url de l'image",
      "description": "Ex: Le resistant est un jeune homme de 18 ans, très jeune, qui a décidé de se lancer dans le monde de la programmation.",
      'mail' :this.email
    }
    this.firebaseservice.create_information(information).then(res =>{
      console.log(res);
      alert("diplome ajouter ");
    }).catch(error =>{
      console.log(error);
    });
    await this.firebaseservice.signup(this.email,this.password)
    if(this.firebaseservice.isloggedIn)
    this.isSignedIn = true;
    localStorage.setItem("emails",this.email);
  }

  async onssignedin(){
    await this.firebaseservice.signin(this.email,this.password)
    if(this.firebaseservice.isloggedIn)
    this.isSignedIn = true;

    this.emailsend.emit<string>(this.email);
    localStorage.setItem("emails",this.email);
  }
   
  createinfo(){
    let information ={
      "noms": "Ex: Nyobe",
      "prenoms": "Ex: Le resistant",
      "dateNaissance": "Ex: 01/01/2000",
      "lieuNaissance": "Ex: Douala",
      "adresse": "Ex: Rue de la paix",
      "occupation": "Ex: Web developper",
      "photo": "url de l'image",
      "description": "Ex: Le resistant est un jeune homme de 18 ans, très jeune, qui a décidé de se lancer dans le monde de la programmation.",
    }

    this.firebaseservice.create_information(information).then(res =>{
      console.log(res);
      alert("diplome ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }



  handlelogout(){
    this.isSignedIn = false
  }



}
