import { Component, OnInit } from '@angular/core';
import { Cv } from './appJSON';

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

  constructor() { }

  ngOnInit(): void {
  }

}
