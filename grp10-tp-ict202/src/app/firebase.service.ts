import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Item } from 'firebase/analytics';
import { window } from 'rxjs';
import { Observable } from 'rxjs';
import { diplome } from './home/diploma/appJSON';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isloggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth,public firestoreservice : AngularFirestore) { }
  async signin(email:string,password :string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isloggedIn =true
      localStorage.setItem("user",JSON.stringify(res.user))
      document.location.reload();
    })
  }

  async signup(email:string,password :string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isloggedIn =true
      localStorage.setItem("user",JSON.stringify(res.user))
      document.location.reload();
    })
  }

  logout()
  {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    document.location.reload();
    }
  
    create_Diplome(Reccord : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Reccord['mail'] = mails.email;
      return this.firestoreservice.collection('diplome').add(Reccord);
    }
  


    get_diplome()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      let am ='2022';
     return  this.firestoreservice.collection<diplome>('diplome',ref =>ref.where('mail','==',mails)).valueChanges();
    // ,ref =>ref.where('mail','==',mail)
    }


} 
