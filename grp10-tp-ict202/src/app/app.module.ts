import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SplitterModule} from 'primeng/splitter';
import {FieldsetModule} from 'primeng/fieldset';
import {TimelineModule} from 'primeng/timeline';
import {SidebarModule} from 'primeng/sidebar';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';

import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { DialogModule } from "primeng/dialog";
import {ProgressBarModule} from 'primeng/progressbar';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
      SigninComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    ScrollPanelModule,
    SplitterModule,
    FieldsetModule,
    TimelineModule,
    CardModule,
    DialogModule,
    ProgressBarModule,
    SidebarModule,
    TabViewModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
