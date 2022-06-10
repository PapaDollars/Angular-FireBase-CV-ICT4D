import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {

  constructor(public cruds : FirebaseService ) { }
   Competence! : any[];
   Experience! : any[];
   Diplome! : any[];
   Langue! : any[];
   Loisir! : any[];
  ngOnInit() {

    this.cruds.get_competence().subscribe(data  =>{
      // console.log(data[0].mail);
      this.Competence =data;   
      console.log(data) ;
    })

    this.cruds.get_experience().subscribe(data  =>{
      // console.log(data[0].mail);
      this.Experience =data;   
      console.log(data) ;
    })

    this.cruds.get_diplome().subscribe(data  =>{
      // console.log(data[0].mail);
      this.Diplome =data;   
      console.log(data) ;
    })

    this.cruds.get_lamgues().subscribe(data  =>{
      // console.log(data[0].mail);
      this.Langue =data;   
      console.log(data) ;
    })

    this.cruds.get_loisirs().subscribe(data  =>{
      // console.log(data[0].mail);
      this.Loisir =data;   
      console.log(data) ;
    })

  }
}
