import { FirebaseService } from './../firebase.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { Cv } from './appJSON';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  display:any;

  cv: Cv[] = [
    { details: "Details Personnels",
      nom: "IYA BOULAMDI DANIEL",
      mail: "iyadaniel6gmail.com",
      numero: +237696971951,
      ville: "Yaounde",
      nationalite: "Camerounais",

      resume: "RESUME",
      contenuResume: "reufhedbchgcvsbdvckhsbd",

      langue: "LANGUES",
      francais: "Francais",
      anglais: "Anglais",

      centreInteret: "CENTRE D'INTERET",
      centre1: "Sport: Football",
      centre2: "Sport: Tennis de Table",

      diplome: "Diplome",
      nomDiplome1: "Collège Moderne de la Bénoué",
      bac!: "2020 : Baccalauréat TI",
      probatoire!: "2019 : Probatoire TI",
      bepc!: "2017 : BEPC",
      nomDiplome2!: "Ecole annexe poumpoumré 3",
      cep!: "2012 : CEP",

      formation!: "Formation",
      themeFormation1!: "ICT4D oct. 2021 - présent",
      descriptionFormation1!: "ICT4D (Informatique and Communication Tecnology for Development), université Yaoundé 1 - niveau 2",
      themeFormation2!: "Conception site internet août 2019- sept. 2019",
      descriptionFormation2!: "DANWE DJASSAM JEAN PIERRE, Chef de Centre Informatique, GAROUJA. Centre National de Développement Informatique (CENADI) Centre National de Développement Informatique (CENADI)",

      competence: "Competence",
      competence1: "Mise en place d'un site Web",
      competence2: "Maintenance des ordinateurs",
      competence3: "Informatisation des systèmes",
      competence4: "Prestation de service",
      competence5: "Infographie multiméia",
      competence6: "Photoshop de la résidence",
      competence7: "MS office",
      competence8: "Affinity Designer",
      competence9: "Windows",
      competence10: "JavaScript",

      copyright: "Copyright @ 2022 Papa_dollar$ | tous droits réservés"
    }
  ];
form: FormGroup ;
color = 'cyan';

constructor(private formBuilder: FormBuilder, public FireS : FirebaseService) {
  this.form = formBuilder.group({
    theme: this.color
  })




  this.form.valueChanges.subscribe(data => {
    this.color = data.theme
    console.log('Form changes', data)
  })
}
@Output()  isLogout = new EventEmitter<void>()

  ngOnInit():void {
    localStorage.setItem("cv",JSON.stringify(this.cv));
    let get = localStorage.getItem(JSON.parse("cv"));
    console.log(get);
    console.log();
  }

  logout(){
    //  localStorage.removeItem("user");
    this.FireS.logout()
    this.isLogout.emit()
    }
}
