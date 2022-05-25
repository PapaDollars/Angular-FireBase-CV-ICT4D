 class diplome {
  
  constructor(Diplome, college , annee)
  {
    this.diploma = Diplome;
    this.college = college;
    this.annee = annee;
    
  }
  
}

 let output = "";
 let tab1 = localStorage.getItem("diplome");
if(tab1 === null)
{
 tab1 = [];
}
else
{
 tab = tab1;
}
tab.array.forEach(data, index => {
  output+=`
  </li>
  <li>
     <p-timeline [value]="events">
<ng-template pTemplate="content" let-event>
    <small class="p-text-secondary">{{data.}}</small>
    <p>
      {{event.college}}
    </p>
</ng-template>
<ng-template pTemplate="opposite" let-event>
    {{event.status}}
</ng-template>

</p-timeline>
  `
  
});
