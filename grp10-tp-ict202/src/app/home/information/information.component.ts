import { style } from '@angular/animations';
import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Cv } from './appJSON';

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

    // this.cruds.create_Details(Record).then(res =>{
    //   console.log(res);
      alert("Information ajouter ");
    // }).catch(error =>{
    //   console.log(error);
    // });

  }

  getcontact(contact:any)
  {
    let Record ={
      'contact' :''
    };
    Record['contact']=contact;

    // this.cruds.create_Contact(Record).then(res =>{
    //   console.log(res);
      alert("Contacts ajouter ");
    // }).catch(error =>{
    //   console.log(error);
    // });

  }

  getmail(mail:any)
  {
    let Record ={
      'mail' :''
    };
    Record['mail']=mail;

    // this.cruds.create_Contact(Record).then(res =>{
    //   console.log(res);
      alert("Mail ajouter ");
    // }).catch(error =>{
    //   console.log(error);
    // });

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
  ngOnInit(): void {
    this.email = localStorage.getItem("emails");

  //  console.log(this.Bnom);
    var noms  = localStorage.getItem("nom");
    var prenoms  = localStorage.getItem("prenom");
    var rues  = localStorage.getItem("rue");
    var mails  = localStorage.getItem("mail");
    var numeros  = localStorage.getItem("nnumeroom");
    var villes  = localStorage.getItem("ville");
    var dateNaisss  = localStorage.getItem("dateNaiss");
    var occupations  = localStorage.getItem("occupation");
    var linkedins  = localStorage.getItem("linkedin");
    var stackoverflows  = localStorage.getItem("stackoverflow");
    var githubs  = localStorage.getItem("github");
    if(noms!=null)
      {
        this.cv[0].nom = noms;
      }
      if(prenoms!=null)
      {
        this.cv[0].prenom = prenoms;
      }
      if(rues!=null)
      {
        this.cv[0].rue = rues;
      }
      if( mails!=null)
      {
        this.cv[0].mail = mails;
      }
      if(numeros!=null)
      {
        this.cv[0].numero = numeros;
      }
      if(villes!=null)
      {
        this.cv[0].ville = villes;
      }
      if(dateNaisss!=null)
      {
        this.cv[0].dateNaiss = dateNaisss;
      }
      if(occupations!=null)
      {
        this.cv[0].occupation = occupations;
      }
      if(linkedins!=null)
      {
        this.cv[0].linkedin = linkedins;
      }
      if(stackoverflows!=null)
      {
        this.cv[0].stackoverflow = stackoverflows;
      }
      if(githubs!=null)
      {
        this.cv[0].github = githubs;
      }
      // else{
      //    alert("valeur vide !");
      // }
  }

}


