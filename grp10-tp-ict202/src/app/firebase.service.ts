import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Item } from 'firebase/analytics';
import { map, window } from 'rxjs';
import { Observable } from 'rxjs';
import { diplome } from './home/diploma/appJSON';
import { formation } from './home/formation/appJSON';
import { competemces } from './home/competence/appJSON';
import { langue } from './home/resume/appJSON';
import { loisirs } from './home/resume/appJSON';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  [x: string]: any;
  isloggedIn = false;
  
  constructor(public firebaseAuth : AngularFireAuth,public firestoreservice : AngularFirestore) {
   
   }
  Items! : Observable<any[]> 
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
  
    create_information(information : any)
    {
      return this.firestoreservice.collection('information').add(information);
    }

    create_Diplome(Reccord : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Reccord['mail'] = mails.email;
      return this.firestoreservice.collection('diplome').add(Reccord);
    }
      
    
    create_competence(Reccord : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Reccord['mail'] = mails.email;
      return this.firestoreservice.collection('competence').add(Reccord);
    }
    

    create_experience(experience : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      experience['mail'] = mails.email;
      return this.firestoreservice.collection('experience').add(experience);
    }

    create_langue(Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('langues').add(Record);
    }

    create_loisirs(Record :any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('loisirs').add(Record);
    }

    create_Contact(Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('contact').add(Record);
    }

    create_Mial(Record : any)
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      Record['mail'] = mails.email;
      return this.firestoreservice.collection('addressemail').add(Record);
    }

    get_AddresseMail()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('addressemail',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }
  
    get_Contact()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('contact',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }
    
    get_info()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('information',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }
    get_diplome()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return this.firestoreservice.collection('diplome',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
      

           
      }
 

    

    // ,ref =>ref.where('mail','==',mail)
    

    get_experience()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('experience',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }

    get_competence()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('competence',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    }

    get_lamgues()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('langues',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))

        }
     
    get_loisirs()
    {
      let mail = <string><unknown>localStorage.getItem('user');
      let mails = JSON.parse(mail);
      mails = mails.email;
      return  this.firestoreservice.collection('loisirs',ref =>ref.where('mail','==',mails)).snapshotChanges().pipe(map(chamges =>{
        return chamges.map(a =>{
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      }))

    }
  Itemdoc !: AngularFirestoreDocument<Item>
    deletediplome(diploma : Item)
    {

      this.Itemdoc = this.firestoreservice.doc('diplome/'+ diploma);
      this.Itemdoc.delete();
    }

    deleteexperience(experience : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('experience/'+ experience);
      this.Itemdoc.delete();
    }

    deleteeCompetence(competenceid : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('competence/'+competenceid);
      this.Itemdoc.delete();
    }

    deleteLangues(langueid : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('langues/'+langueid);
      this.Itemdoc.delete();
    }

    deleteLoisir(Loisirid : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('loisirs/'+Loisirid);
      this.Itemdoc.delete();
    }

    updateinfo(info : Item){
      this.Itemdoc = this.firestoreservice.doc('information/'+info.id);
      this.Itemdoc.update(info);
      alert('ajour !')
    }

    updateDwnloadUrl(Record : Item)
    {
      this.Itemdoc = this.firestoreservice.doc('information/'+Record.id);
      this.Itemdoc.update(Record);
    }

} 
