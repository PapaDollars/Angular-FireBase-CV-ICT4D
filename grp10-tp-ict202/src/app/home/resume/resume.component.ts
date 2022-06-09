import { Component, OnInit } from '@angular/core';
import { Cv } from './appJSON';
import {PrimeIcons} from 'primeng/api';
import {TimelineModule} from 'primeng/timeline';
import { CentreIserviceService } from 'src/app/home/centre-iservice.service';
import { LangueserviceService } from 'src/app/home/langueservice.service';
import { PrimeNGConfig } from "primeng/api";
import { FirebaseService } from 'src/app/firebase.service';
import {ProgressBarModule} from 'primeng/progressbar';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  email : any ='';
  cv: Cv[] = [
    {

      resume: "RESUME",
      contenuResume: "reufhedbchgcvsbdvckhsbd",
      contenuResume2: "reufhedbchgcvsbdvckhsbd",

      langue: "LANGUES",
      francais: "Francais",
      anglais: "Anglais",

      centreInteret: "CENTRE D'INTERET",
      centre1: "Sport: Football",
      centre2: "Sport: Tennis de Table",

    }
  ];

  plus(){
    let plus : any;
    plus = document.getElementById("contenuResume2");
    plus.style.display = "block";
  }

  constructor(private primengConfig: PrimeNGConfig,private _centreI : CentreIserviceService, private _langueS : LangueserviceService,public cruds :FirebaseService) { }
  centreI!: any [];
  langues!: any [];

 ngOnInit(): void {
   this.email = localStorage.getItem("emails");
   this.primengConfig.ripple = true;
   this.langues = this._langueS.getlangue();
   this.centreI = this._centreI.getcentreInteret();
  
   this.cruds.get_lamgues().subscribe(data  =>{
    // console.log(data[0].mail);
    this.langues =data;   
    console.log(data) ;

  
  
  })

  
  this.cruds.get_loisirs().subscribe(data  =>{
    // console.log(data[0].mail);
    this.centreI =data;   
    console.log(data) ;
})

 }
   
  

  geeks!: boolean;
 
  gfg() {
    this.geeks = true;
  }

  geeks1!: boolean;

  gfg1() {
    this.geeks1 = true;

  }

  deleteLangues(langue : any)
  {
    this.cruds.deleteLangues(langue.id);
  }

  getlangue(langue : string,niveau:string)
  {
    
   let Record = {
     'mail':'',
    "nom": "",
    "niveau": ''
   }

   Record['mail']='';
   Record['nom']=langue;
   Record['niveau']=niveau;

   
   this.cruds.create_langue(Record).then(res =>{
    console.log(res);
    alert("experience ajouter ");
  }).catch(error =>{
    console.log(error);
  });


   


  // let d : any= <string><unknown>localStorage.getItem("langue");
  //  let d1 = JSON.parse(d);
  // if(d === null)
  // {
  //   let s : String[] = [];
  //   localStorage.setItem("langue", JSON.stringify(s));
  // }
  // else
  // {
  //   let len = d1.length;
  //   if(len == 0)
  //   {
  //     d1[0] = langue ;

  //     localStorage.setItem("langue", JSON.stringify(d1));
  //     alert("ajouter");
  //     window.location.reload();
  //   }
  //   else
  //   {
  //      d1[len] = langue ;
  //      localStorage.setItem("langue", JSON.stringify(d1));
  //      alert("ajouter");
  //      window.location.reload();

  //   }
  // }
  }

  
 deleteLoisir(loisir : any)
  {
    this.cruds.deleteLoisir(loisir.id);
  }

  getcentre(centreinteret : string)
  {

    let Record = {
      'mail':'',
     "nom": ""
    }
 
    Record['mail']='';
    Record['nom']=centreinteret;

    this.cruds.create_loisirs(Record).then(res =>{
      console.log(res);
      alert("experience ajouter ");
    }).catch(error =>{
      console.log(error);
    });

    
    // let c  : any= <string><unknown>localStorage.getItem("centreI");
    // c = JSON.parse(c);
    // if(c == null)
    // {
    //   let s : String[] = [];
    //   localStorage.setItem("centreI", JSON.stringify(s));
    // }
    // else
    // {
    //   let len = c.length;
    //   if(len == 0)
    //   {
    //     c[0] = centreinteret;
    //     localStorage.setItem("centreI", JSON.stringify(c));
    //     window.location.reload();

    //   }
    //   else
    //   {
    //      c[len] = centreinteret;
    //      localStorage.setItem("centreI", JSON.stringify(c));
    //      window.location.reload();

    //   }
    // }
  }


}
