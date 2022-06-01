import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangueserviceService {

  constructor() { }

  getlangue()
  {
    let l = <string><unknown>localStorage.getItem("langue");
    let l1 = JSON.parse(l);
    return l1;
    
  }
}
