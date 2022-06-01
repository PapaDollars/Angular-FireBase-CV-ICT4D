import { Component, OnInit } from '@angular/core';
import { Cv,competemces } from './appJSON';
import {PrimeIcons, PrimeNGConfig} from 'primeng/api';
import {TimelineModule} from 'primeng/timeline';
import { LocationStrategy } from '@angular/common';
import {ProgressBarModule} from 'primeng/progressbar';
import { CompetenceserviceService } from 'src/app/home/competenceservice.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  cv: Cv[] = [
    {

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

    }
  ];

  constructor(private primengConfig: PrimeNGConfig, private _competenceservice : CompetenceserviceService) { }
  events!: competemces[];
  value: number = 75.6;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  this.events = this._competenceservice.getcompetence();
  }

  geeks!: boolean;

  gfg() {
    this.geeks = true;
  }



  getdiplome(competence : string , pourcentage : string)
  {
  console.log(competence);
  console.log(<number><unknown>pourcentage);
  let comp = <string><unknown>localStorage.getItem("comp");
  let  comps  = JSON.parse(comp);
    let comptncs : competemces;
    if(comp == null)
    {
      let cmp : competemces[] = [];
     localStorage.setItem("comp",JSON.stringify(cmp));
     alert("liste de competence Cree !");
     window.location.reload();
    }
    else
    {
      let len = comps.length;
      if(len == 0)
      {

        comptncs = new competemces(competence, <number><unknown>pourcentage);
        comps[0]= comptncs;
        localStorage.setItem("comp", JSON.stringify(comps));
        alert("Competence Ajouter !");
        window.location.reload();
      }
      else
      {
        comptncs = new competemces(competence, <number><unknown>pourcentage);
        comps[len] = comptncs;
        localStorage.setItem("comp", JSON.stringify(comps));
        alert("Competence Ajouter !");
        window.location.reload();
      }


    }

  }
}
