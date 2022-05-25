import { Component, OnInit } from '@angular/core';
import { Cv } from './appJSON';

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

      langue: "LANGUES",
      francais: "Francais",
      anglais: "Anglais",

      centreInteret: "CENTRE D'INTERET",
      centre1: "Sport: Football",
      centre2: "Sport: Tennis de Table",

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
