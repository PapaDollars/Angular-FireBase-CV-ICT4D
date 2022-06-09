export class Cv {
  resume!: string;
  contenuResume!: string;
  contenuResume2!: string;

  langue!: string;
  francais!: string;
  anglais!: string;

  centreInteret!: string;
  centre1!: string;
  centre2!: string;



}


export class langue {
  public mail! : string;
  public nom! : string
  public niveau! : string;

constructor(mail : string,nom : string, niveau : string) {
   this.mail=mail;
   this.nom =nom;
   this.niveau =niveau;
}
}

export class loisirs{
  public mail! : string;
  public nom! : string;

  constructor(mail : string,nom:string)
  {
     this.mail = mail;
     this.nom = nom;
  }
}

