import { Component, OnInit } from '@angular/core';
import { Cv,diplome } from './appJSON';
import { PrimeNGConfig } from "primeng/api";
import {PrimeIcons} from 'primeng/api';
import {TimelineModule} from 'primeng/timeline';
import { LocationStrategy } from '@angular/common';
import { DiplomeserviceService } from 'src/app/home/diplomeservice.service';
import { EmailserviceService } from 'src/app/emailservice.service';
@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {

  cv: Cv[] = [
    {

      diplome: "Diplome",
      nomDiplome1: "Collège Moderne de la Bénoué",
      bac!: "2020 : Baccalauréat TI",
      probatoire!: "2019 : Probatoire TI",
      bepc!: "2017 : BEPC",
      nomDiplome2!: "Ecole annexe poumpoumré 3",
      cep!: "2012 : CEP",

    }
  ];




  constructor(private primengConfig: PrimeNGConfig, private _piplomeservice : DiplomeserviceService,public emailrecieve : EmailserviceService) {}
  email : string ="vbvbvbv";
  emais : any ='';
  events!: any[];
  diplomes! : any[];
  ngOnInit() {
    // let emt : diplome[];
    // localStorage.setItem("Events",JSON.stringify(emt));
    this.emailrecieve.on<string>().subscribe(
      data =>{
        this.email = data;
       
      }
    )
    this.emais = localStorage.getItem("emails");
    this.primengConfig.ripple = true;
    this.events = this._piplomeservice.getsdips();



   // let dp : diplome [] = [
    //  {diploma:"GCE O-LEVEL", college:"Saint Albert",annee: "2021"}
   // ];

 // localStorage.setItem("diplome",JSON.stringify(dp));
  //var dip = <string><unknown>localStorage.getItem("diplome");
 // let dips = JSON.parse(dip);
 // console.log(dips[0].diploma);



  }
   geeks!: boolean;

  gfg() {
    this.geeks = true;
  }



  getdiplome(Collège : any,Diplome : any,Annee : any){
    console.log(Collège);
    console.log(Diplome);
    console.log(Annee);
    var dip = <string><unknown>localStorage.getItem("diplome");
    let dips = JSON.parse(dip);
    if(dips === null)
    {
      let d1 : diplome [] = [];
      localStorage.setItem("diplome",JSON.stringify(d1));
      alert("liste de Diplome Cree !");
    }
    else{
      let len : number = dips.length;
      let d : diplome;
      if(len == 0)
      {
         d= new diplome(Diplome,Collège,Annee);
        dips[0]= d;
        localStorage.setItem("diplome",JSON.stringify(dips));
        alert("Diplome Ajouter avec Success !");
        window.location.reload();
      }
      else
      {
        d= new diplome(Diplome,Collège,Annee);
        dips[len]= d;
        localStorage.setItem("diplome",JSON.stringify(dips));
        alert("Diplome Ajouter avec Success !");
        window.location.reload();
      }
    }


  }

}
