import { Injectable } from '@angular/core';
import { diplome } from './diploma/appJSON';
@Injectable({
  providedIn: 'root'
})
export class DiplomeserviceService {

  constructor() { }



  getsdips()
  {
    var dip = <string><unknown>localStorage.getItem("diplome");
  let dips = JSON.parse(dip);
    return dips;
  }
  getdiplome()
  {
    return [
      {status: 'Ordered', annee: '15/10/2020 10:30', college: 'College s' },
      {status: 'Processing', annee: '15/10/2020 14:00',  college: 'College s'},
      {status: 'Shipped', annee: '15/10/2020 16:15',college: 'College s'},
      {status: 'Delivered', annee: '16/10/2020 10:00',  college: 'College s'}
    ]
  }
}
