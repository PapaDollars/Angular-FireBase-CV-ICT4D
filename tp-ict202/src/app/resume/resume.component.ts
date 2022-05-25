import { Component, OnInit } from '@angular/core';
import { Cv } from './appJSON';
import {PrimeIcons} from 'primeng/api';
import {TimelineModule} from 'primeng/timeline';
import { CentreIserviceService } from 'src/app/centre-iservice.service';
import { LangueserviceService } from 'src/app/langueservice.service';
import { PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

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

  constructor(private primengConfig: PrimeNGConfig,private _centreI : CentreIserviceService, private _langueS : LangueserviceService) { }
  centreI!: string []; 
  langues!: string [];
  
 ngOnInit(): void {
   this.primengConfig.ripple = true;
   this.langues = this._langueS.getlangue();
   this.centreI = this._centreI.getcentreInteret();}



  geeks!: boolean;
   
  gfg() {
    this.geeks = true;
  }

  geeks1!: boolean;
   
  gfg1() {
    this.geeks1 = true;
   
  }
  getlangue(langue : string)
  {
   
  let d : any= <string><unknown>localStorage.getItem("langue");
   let d1 = JSON.parse(d);
  if(d === null)
  {
    let s : String[] = [];
    localStorage.setItem("langue", JSON.stringify(s));
  }
  else
  {
    let len = d1.length;
    if(len == 0)
    {
      d1[0] = langue ;
   
      localStorage.setItem("langue", JSON.stringify(d1));
      alert("ajouter");
      window.location.reload();
    }
    else
    {
       d1[len] = langue ;
       localStorage.setItem("langue", JSON.stringify(d1));
       alert("ajouter");
       window.location.reload();

    }
  }
  }


  getcentre(centreinteret : string)
  {
    let c  : any= <string><unknown>localStorage.getItem("centreI");
    c = JSON.parse(c);
    if(c == null)
    {
      let s : String[] = [];
      localStorage.setItem("centreI", JSON.stringify(s));
    }
    else
    {
      let len = c.length;
      if(len == 0)
      {
        c[0] = centreinteret;
        localStorage.setItem("centreI", JSON.stringify(c));
        window.location.reload();

      }
      else
      {
         c[len] = centreinteret;
         localStorage.setItem("centreI", JSON.stringify(c));
         window.location.reload();

      }
    }
  }


}
