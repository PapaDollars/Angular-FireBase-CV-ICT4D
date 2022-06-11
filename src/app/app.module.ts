import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compact'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule
    AngularFireModule.initialise(environment.firebse)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
