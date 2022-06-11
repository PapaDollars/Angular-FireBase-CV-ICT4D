import { style } from '@angular/animations';
import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Cv } from './appJSON';
import { FirebaseService } from 'src/app/firebase.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { url } from 'inspector';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  email : any ='';
   public nom : string = "";
   public rue : string = "";
   public prenom : string = "";
   public mail : string = "";
   public numero : string = "";
   public ville : string = "";
   public dateNaiss : string = "";
   public occupation : string = "";
   public linkedin : string = "";
   public stackoverflow : string = "";
   public github : string = "";
   public colorBlue : string ="blue";
  //  public colorRed : string ="red";

  cv: Cv[] = [
    { details: "Details Personnels",
      contact : "Contacts",
      addresse : "Addresse Mail",
      nom: "Iya boulamdi ",
      prenom: "Daniel",
      mail: "iyadaniel6gmail.com",
      numero: "+237696971951",
      ville: "Yaounde",
      rue: "Rue de la paix",
      dateNaiss: "11-12-2022",
      occupation : "occupation",
      linkedin: "https://www.linkedin.com/in/daniel-iya-a29519181/",
      stackoverflow: "https://stackoverflow.com/users/18965791/papa-dollars?tab=profile",
      github: "https://github.com/PapaDollars",
    }
  ];


  bannerImg : any;
  events!: any[];

  geeksDetails!: boolean;
  geeksContact!: boolean;
  geeksMail!: boolean;

  gfgDetails() {
    this.geeksDetails = true;
  }

  gfgContact() {
    this.geeksContact = true;
  }

  gfgMail() {
    this.geeksMail = true;
  }

  getdetails(nom:any, prenom: any, lieuNaiss: any, dateNaiss: any, rue: any, occupation: any)
  {
    let Record ={
      'nom' :'',
      'prenom' : '',
      'lieuNaiss' : '',
      'dateNaiss'  : '',
      'rue'  : '',
      'occupation'  : ''
    };
    Record['nom']=nom;
    Record['prenom']=prenom;
    Record['lieuNaiss']=lieuNaiss;
    Record['dateNaiss']=dateNaiss;
    Record['rue']=rue;
    Record['occupation']=occupation;
      alert("Information ajouter ");
  }


  getcontact(contact:any)
  {
    let Record ={
      'contact' :'',
      'mail':''
    };
    Record['contact']=contact;

    this.cruds.create_Contact(Record).then(res =>{
      console.log(res);
      alert("Contact ajouter ");
    }).catch(error =>{
      console.log(error);
    });

  }

  getmail(mail:any)
  {
    let Record ={
      'mail' :'',
      'addresseMail':""
    };
    Record['addresseMail']=mail;
    this.cruds.create_Mial(Record).then(res =>{
      console.log(res);
      alert("addressemail ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }
  
  updateinfo(nom : any,prenom : any,ville :any,dateNaiss :any,rue : any,occupation : any,description :any)
  {

     this.info[0].noms=nom;
     this.info[0].prenoms=prenom;
     this.info[0].dateNaissance=dateNaiss;
     this.info[0].lieuNaissance=ville;;
     this.info[0].adresse=rue;
     this.info[0].occupation=occupation;
     this.info[0].description=description;
     console.log(this.info[0])
     console.log(nom+'dsds');
     this.cruds.updateinfo(this.info[0]);
  }
  boutonNom(){
    let Bnom : any;
    Bnom = document.getElementById("Bnom");
    Bnom.style.display = "block";
  }
  boutonPrenom(){
    let Bprenom : any;
    Bprenom = document.getElementById("Bprenom");
    Bprenom.style.display = "block";
  }
  boutonRue(){
    let Brue : any;
    Brue = document.getElementById("Brue");
    Brue.style.display = "block";
  }
  boutonMail(){
    let Bmail : any;
    let BOuvrirmail : any;
    Bmail = document.getElementById("Bmail");
    Bmail.style.display = "block";
    BOuvrirmail = document.getElementById("BOuvrirmail");
    BOuvrirmail.style.display = "block";
  }
  boutonNumero(){
    let Bnumero : any;
    Bnumero = document.getElementById("Bnumero");
    Bnumero.style.display = "block";
  }
  boutonVille(){
    let Bville : any;
    Bville = document.getElementById("Bville");
    Bville.style.display = "block";
  }
  boutonDateNaiss(){
    let BdateNaiss : any;
    BdateNaiss = document.getElementById("BdateNaiss");
    BdateNaiss.style.display = "block";
  }
  boutonOccupation(){
    let Boccupation : any;
    Boccupation = document.getElementById("Boccupation");
    Boccupation.style.display = "block";
  }
  boutonLinkedin(){
    let linkedin : any;
    let BOuvrirlinkedin : any;
    let Blinkedin : any;
    linkedin = document.getElementById("linkedin");
    linkedin.style.display = "block";
    BOuvrirlinkedin = document.getElementById("BOuvrirlinkedin");
    BOuvrirlinkedin.style.display = "block";
    Blinkedin = document.getElementById("Blinkedin");
    Blinkedin.style.display = "block";
  }
  boutonStackoverflow(){
    let stackoverflow : any;
    let BOuvrirstackoverflow : any;
    let Bstackoverflow : any;
    stackoverflow = document.getElementById("stackoverflow");
    stackoverflow.style.display = "block";
    BOuvrirstackoverflow = document.getElementById("BOuvrirstackoverflow");
    BOuvrirstackoverflow.style.display = "block";
    Bstackoverflow = document.getElementById("Bstackoverflow");
    Bstackoverflow.style.display = "block";
  }
  boutonGithub(){
    let github : any;
    let BOuvrirgithub : any;
    let Bgithub : any;
    github = document.getElementById("linkedin");
    github.style.display = "block";
    BOuvrirgithub = document.getElementById("BOuvrirgithub");
    BOuvrirgithub.style.display = "block";
    Bgithub = document.getElementById("Bgithub");
    Bgithub.style.display = "block";
  }

  inputNom(value:string){
    localStorage.setItem("nom",value);
    document.location.reload();
   }
   inputRue(value:string){
    localStorage.setItem("rue",value);
    document.location.reload();
   }
   inputPrenom(value:string){
    localStorage.setItem("prenom",value);
    document.location.reload();
   }
  inputMail(value:string){
    localStorage.setItem("mail",value);
    document.location.reload();
   }
  inputNumero(value:string){
    localStorage.setItem("numero",value);
    document.location.reload();
   }
  inputVille(value:string){
    localStorage.setItem("ville",value);
    document.location.reload();
   }
   inputDateNaiss(value:string){
    localStorage.setItem("dateNaiss",value);
    document.location.reload();
   }
   inputOccupation(value:string){
    localStorage.setItem("occupation",value);
    document.location.reload();
   }
   inputLinkedin(value:string){
    localStorage.setItem("linkedin",value);
    document.location.reload();
   }
   inputStackoverflow(value:string){
    localStorage.setItem("stackoverflow",value);
    document.location.reload();
   }

   inputGithub(value:string){
    localStorage.setItem("github",value);
    document.location.reload();
   }
   constructor(public cruds :FirebaseService, public crudStorage : AngularFireStorage,public firestoreservice : AngularFirestore)
   {

   }

   
  succesupdate !: string;
  task !: AngularFireUploadTask;
  ref ! : AngularFireStorageReference;

  updateImage(event : any)
  {
   
     const id = Math.random().toString(36).substring(2)
     this.ref=this.crudStorage.ref(id)
     this.task=this.ref.put(event.target.files[0])
     this.task.then((data )=>{
      data.ref.getDownloadURL().then(url=>{
        this.firestoreservice.collection('information').doc(this.info[0].id).update({photo:url});
      })
     })
  } 

   info !: any[];
   conctacts !: any[];
   mails ! : any[];
  ngOnInit(): void {
    this.email = localStorage.getItem("emails");
    this.cruds.get_info().subscribe(data  =>{
      // console.log(data[0].mail);
      this.info =data;
      console.log(data) ;
    })

    this.cruds.get_Contact().subscribe(data  =>{
      // console.log(data[0].mail);
      this.conctacts =data;
      console.log(data) ;
    })

    this.cruds.get_AddresseMail().subscribe(data  =>{
      // console.log(data[0].mail);
      this.mails =data;
      console.log(data) ;
    })

  }

}


