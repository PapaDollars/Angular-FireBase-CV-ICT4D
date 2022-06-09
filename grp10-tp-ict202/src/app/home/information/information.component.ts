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
   public mail : string = "";
   public numero : string = "";
   public ville : string = "";
   public nationalite : string = "";
   public linkedin : string = "";
   public stackoverflow : string = "";
   public github : string = "";
   public colorBlue : string ="blue";
  //  public colorRed : string ="red";

  cv: Cv[] = [
    { details: "Details Personnels",
      nom: "Iya boulamdi daniel",
      mail: "iyadaniel6gmail.com",
      numero: "+237696971951",
      ville: "Yaounde",
      nationalite: "Camerounais",
      linkedin: "https://www.linkedin.com/in/daniel-iya-a29519181/",
      stackoverflow: "https://stackoverflow.com/users/18965791/papa-dollars?tab=profile",
      github: "https://github.com/PapaDollars",
    }
  ];

  bannerImg : any;
  events!: any[];

  geeks!: boolean;

  gfg() {
    this.geeks = true;
  }

  boutonNom(){
    let Bnom : any;
    Bnom = document.getElementById("Bnom");
    Bnom.style.display = "block";
  }
  boutonMail(){
    let Bnom : any;
    let BOuvrirmail : any;
    Bnom = document.getElementById("Bmail");
    Bnom.style.display = "block";
    BOuvrirmail = document.getElementById("BOuvrirmail");
    BOuvrirmail.style.display = "block";
  }
  boutonNumero(){
    let Bnom : any;
    Bnom = document.getElementById("Bnumero");
    Bnom.style.display = "block";
  }
  boutonVille(){
    let Bville : any;
    Bville = document.getElementById("Bville");
    Bville.style.display = "block";
  }
  boutonNationalite(){
    let Bnom : any;
    Bnom = document.getElementById("Bnationalite");
    Bnom.style.display = "block";
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
  inputNationalite(value:string){
    localStorage.setItem("nationalite",value);
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
    var mails  = localStorage.getItem("mail");
    var numeros  = localStorage.getItem("nnumeroom");
    var villes  = localStorage.getItem("ville");
    var nationalites  = localStorage.getItem("nationalite");
    var linkedins  = localStorage.getItem("linkedin");
    var stackoverflows  = localStorage.getItem("stackoverflow");
    var githubs  = localStorage.getItem("github");
    if(noms!=null)
      {
        this.cv[0].nom = noms;
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
      if(nationalites!=null)
      {
        this.cv[0].nationalite = nationalites;
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


