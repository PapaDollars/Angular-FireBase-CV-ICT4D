import { Component, OnInit } from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;

  birthday : Date;
  ngOnInit() {
    this.birthday = new Date();
  }

}
