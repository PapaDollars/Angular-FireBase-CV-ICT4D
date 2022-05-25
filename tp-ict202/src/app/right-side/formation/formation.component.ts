import { Component, OnInit } from '@angular/core';
import { Cv } from './appJSON';

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

  constructor() { }

  ngOnInit(): void {
  }

}
