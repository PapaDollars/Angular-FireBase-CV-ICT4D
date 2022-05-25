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
import { LangueserviceService } from './langueservice.service';
import { CentreIserviceService } from './centre-iservice.service';

import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { ResumeComponent } from './resume/resume.component';
import { FormationComponent } from './formation/formation.component';
import { CompetenceComponent } from './competence/competence.component';
import { DialogModule } from "primeng/dialog";
import { DiplomeserviceService } from './diplomeservice.service';
import { FormationserviceService } from './formationservice.service';
import {ProgressBarModule} from 'primeng/progressbar';
import { CompetenceserviceService } from './competenceservice.service';
import { ThemeColorService } from './theme-color.service';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    ResumeComponent,
    DiplomaComponent,
    FormationComponent,
    CompetenceComponent
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
    ReactiveFormsModule
  ],
  providers: [DiplomeserviceService,FormationserviceService,CompetenceserviceService,LangueserviceService,CentreIserviceService,ThemeColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
