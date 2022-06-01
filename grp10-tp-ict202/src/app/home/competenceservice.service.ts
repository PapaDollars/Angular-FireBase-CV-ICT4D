import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenceserviceService {

  constructor() { }

  getcompetence()
  {
    let comp = <string><unknown>localStorage.getItem("comp");
    let comps = JSON.parse(comp);
    return comps;
  }
}
