import { Component, OnInit } from '@angular/core';
import { Cv, formation } from './appJSON';
import { PrimeNGConfig } from "primeng/api";
import {PrimeIcons} from 'primeng/api';
import {TimelineModule} from 'primeng/timeline';
import { FormationserviceService } from 'src/app/home/formationservice.service';
import { AnyMxRecord } from 'dns';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  cv: Cv[] = [
    {

      formation!: "Formation",
      themeFormation1!: "ICT4D oct. 2021 - présent",
      descriptionFormation1!: "ICT4D (Informatique and Communication Tecnology for Development), université Yaoundé 1 - niveau 2",
      themeFormation2!: "Conception site internet août 2019- sept. 2019",
      descriptionFormation2!: "DANWE DJASSAM JEAN PIERRE, Chef de Centre Informatique, GAROUJA. Centre National de Développement Informatique (CENADI) Centre National de Développement Informatique (CENADI)",

    }
  ];

  constructor(private primengConfig: PrimeNGConfig, private _formationservice : FormationserviceService) { }
  events!: any[];
  email : any = "";
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.events = this._formationservice.getformation();
    this.email = localStorage.getItem("emails");
  //  this.events = [
  //    {status: 'Ordered', annee: '15/10/2020 10:30', college: 'College s' },
  //    {status: 'Processing', annee: '15/10/2020 14:00',  college: 'College s'},
    //  {status: 'Shipped', annee: '15/10/2020 16:15',college: 'College s'},
     //{status: 'Delivered', annee: '16/10/2020 10:00',  college: 'College s'}
    //]
  }
  geeks!: boolean;

  gfg() {
    this.geeks = true;
  }
  getdiplome(Lieu :string, andebut :string, anfin :string, content : string)
  {
    console.log(Lieu);
    console.log(andebut);
    console.log(anfin);
    console.log(content);
   // localStorage.setItem("formation",JSON.stringify(f1));
   let formations = <string><unknown>localStorage.getItem("formation");
   let f1 = JSON.parse(formations);
   let f3 : formation;
   if(f1 == null)
   {
     let f2  : formation [] = [];
     localStorage.setItem("formation",JSON.stringify(f2));
     alert("liste Formation Cree !");
;   }
   else
   {
     let len = f1.length;
     if(len == 0)
     {
       f3 = new formation(Lieu,andebut,anfin,content);
       f1[0] = f3;
       localStorage.setItem("formation",JSON.stringify(f1));
       alert("Formation Ajouter !");
       window.location.reload();
     }
     else
     {
      f3 = new formation(Lieu,andebut,anfin,content);
      f1[len] = f3;
      localStorage.setItem("formation",JSON.stringify(f1));
      alert("Formation Ajouter !");
      window.location.reload();
     }
   }

  }
}
