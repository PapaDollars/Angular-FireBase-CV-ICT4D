import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentreIserviceService {

  constructor() { }
getcentreInteret()

{
  let c = <string><unknown>localStorage.getItem("centreI");
  let c1 = JSON.parse(c);
  return c1;
}
}
