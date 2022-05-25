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
      contenuResume2: "reufhedbchgcvsbdvckhsbd",

      langue: "LANGUES",
      francais: "Francais",
      anglais: "Anglais",

      centreInteret: "CENTRE D'INTERET",
      centre1: "Sport: Football",
      centre2: "Sport: Tennis de Table",

    }
  ];

  plus(){
    let plus : any;
    plus = document.getElementById("contenuResume2");
    plus.style.display = "block";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
