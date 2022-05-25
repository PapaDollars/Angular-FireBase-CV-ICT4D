import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationserviceService {

  constructor() { }

  getformation()
  {
    var frm = <string><unknown>localStorage.getItem("formation");
  let frms = JSON.parse(frm);
    return frms;
  }
}
