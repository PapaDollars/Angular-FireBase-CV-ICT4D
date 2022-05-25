import { Component, OnInit } from '@angular/core';
import { Cv,diplome } from './appJSON';
import { PrimeNGConfig } from "primeng/api";
import {PrimeIcons} from 'primeng/api';
import {TimelineModule} from 'primeng/timeline';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {

  cv: Cv[] = [
    {

      diplome: PrimeIcons.BOOK,
      nomDiplome1: "Collège Moderne de la Bénoué",
      bac!: "2020 : Baccalauréat TI",
      probatoire!: "2019 : Probatoire TI",
      bepc!: "2017 : BEPC",
      nomDiplome2!: "Ecole annexe poumpoumré 3",
      cep!: "2012 : CEP",

    }
  ];

  events = [
    {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.BOOK, color: '#9C27B0'},
    {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.PENCIL, color: '#FF9800'},
    {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
    {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
];



  constructor(private primengConfig: PrimeNGConfig) {}
  // events!: any[];

  ngOnInit() {
    // let emt : diplome[];
    // localStorage.setItem("Events",JSON.stringify(emt));
    console.log(PrimeIcons.BOOK+'   dsd');
    this.primengConfig.ripple = true;
    
  }
   geeks!: boolean;
   
  gfg() {
    this.geeks = true;
  }
   
  getdiplome(Collège : any,Diplome : any,Annee : any){
    console.log(Collège);
    console.log(Diplome);
    console.log(Annee);

    let eventss = localStorage.getItem("Events");

    if(eventss){
    // let ev = new diplome(Collège,Diplome,Annee);
     let lent = eventss.length;
     if(lent == 0)
     {
     
     }
     

    }else alert("Events vide dans le local storage");
  }

}
