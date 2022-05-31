import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor  (public FireS : FirebaseService) { }
   @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  logout()
  {
    this.FireS.logout()
    this.isLogout.emit()
  }
}
