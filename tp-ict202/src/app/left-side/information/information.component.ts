import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { Cv } from './appJSON';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
   public name : string = "";
  cv: Cv[] = [
    { details: "Details Personnels",
      nom: "IYA BOULAMDI DANIEl",
      mail: "iyadaniel6gmail.com",
      numero: +237696971951,
      ville: "Yaounde",
      nationalite: "Camerounais",

    }
  ];



  //  b : string ;

 input(value:string){
  //  let valeur : string = value;
    // this.cv[0].nom= value;
    localStorage.setItem("nom",value);

   }


  ngOnInit(): void {
    // console.log(this.b);
    var noms  = localStorage.getItem("nom");
    if(noms != null)
      {
        // this.name = noms;
        this.cv[0].details = noms;
        // alert(this.name);
      }
      else{
        // alert("valeur vide !");
      }


  }

}


