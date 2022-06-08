import { Component, OnInit } from '@angular/core';
import { Cv,diplome } from './appJSON';
import { PrimeNGConfig } from "primeng/api";
import {PrimeIcons} from 'primeng/api';
import {TimelineModule} from 'primeng/timeline';
import { LocationStrategy } from '@angular/common';
import { DiplomeserviceService } from 'src/app/home/diplomeservice.service';
import { EmailserviceService } from 'src/app/emailservice.service';
import { FirebaseService } from 'src/app/firebase.service';
import { error } from 'console';
import _default from 'primeng/public_api';
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

  constructor(private primengConfig: PrimeNGConfig, private _piplomeservice : DiplomeserviceService,public cruds : FirebaseService) {}
  email : string ="vbvbvbv";
  emais : any ='';
  events!: any[];
  diplome: diplome[]=[];
  diplomes! : [];
  ngOnInit() {
    
    this.cruds.get_diplome().subscribe(data =>{
      // console.log(data[0].mail);
      this.events =data;   
      console.log(this.diplome)  ;
    })
      
    
    
    // let emt : diplome[];
    // localStorage.setItem("Events",JSON.stringify(emt));

    // this.emais = localStorage.getItem("emails");
    // this.primengConfig.ripple = true;
    // this.events = this._piplomeservice.getsdips();



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

  getdiplome(Collège : any,Diplome : any,Annee : any)
  {
    let Record ={
      'mail' :'',
      'college' : '',
      'diplome' : '',
      'annee'  : ''
    };
    Record['mail']='';
    Record['college']=Collège;
    Record['diplome']=Diplome;
    Record['annee']=Annee;
    
    this.cruds.create_Diplome(Record).then(res =>{
      console.log(res);
      alert("diplome ajouter ");
    }).catch(error =>{
      console.log(error);
    });
    

  }


  // getdiplome(Collège : any,Diplome : any,Annee : any){
  //   console.log(Collège);
  //   console.log(Diplome);
  //   console.log(Annee);
  //   var dip = <string><unknown>localStorage.getItem("diplome");
  //   let dips = JSON.parse(dip);
  //   if(dips === null)
  //   {
  //     let d1 : diplome [] = [];
  //     localStorage.setItem("diplome",JSON.stringify(d1));
  //     alert("liste de Diplome Cree !");
  //   }
  //   else{
  //     let len : number = dips.length;
  //     let d : diplome;
  //     if(len == 0)
  //     {
  //        d= new diplome(Diplome,Collège,Annee);
  //       dips[0]= d;
  //       localStorage.setItem("diplome",JSON.stringify(dips));
  //       alert("Diplome Ajouter avec Success !");
  //       window.location.reload();
  //     }
  //     else
  //     {
  //       d= new diplome(Diplome,Collège,Annee);
  //       dips[len]= d;
  //       localStorage.setItem("diplome",JSON.stringify(dips));
  //       alert("Diplome Ajouter avec Success !");
  //       window.location.reload();
  //     }
  //   }


  // }

}
