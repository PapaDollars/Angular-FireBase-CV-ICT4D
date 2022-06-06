import { OnInit, Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor() { }


// function download template 1 in PDF

@ViewChild('content1', {static: false}) element1!: ElementRef;

Template1_PDF (){
  const getDisplay : any = document.querySelector("#template1");

  if(getDisplay.classList != null)
    {
      getDisplay.style.display = "block";

    let pdf = new jsPDF('p','pt','a3');
    pdf.html(this.element1.nativeElement,{
      callback: (pdf) => {
        pdf.save("Template_1.pdf");
        getDisplay.style.display = "none";
      }
    });
  }
}

// function download template 2 in PDF

@ViewChild('content2', {static: false}) element2!: ElementRef;

Template2_PDF(){
  const getDisplay : any = document.querySelector("#template2");

  if(getDisplay.classList != null)
    {
      getDisplay.style.display = "block";

    let pdf = new jsPDF('p','pt','a3');
    pdf.html(this.element2.nativeElement,{
      callback: (pdf) => {
        pdf.save("Template_2.pdf");
        getDisplay.style.display = "none";
      }
    });
  }
}

// function download template 3 in PDF

@ViewChild('content3', {static: false}) element3!: ElementRef;

Template3_PDF(){
  const getDisplay : any = document.querySelector("#template3");

  if(getDisplay.classList != null)
    {
      getDisplay.style.display = "block";

    let pdf = new jsPDF('p','pt','a3');
    pdf.html(this.element3.nativeElement,{
      callback: (pdf) => {
        pdf.save("Template_3.pdf");
        getDisplay.style.display = "none";
      }
    });
  }
}

  ngOnInit() {
  }

}
