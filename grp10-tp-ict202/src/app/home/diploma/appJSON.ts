export class Cv {
  diplome!: string;
  nomDiplome1!: string;
  bac!: string;
  probatoire!: string;
  bepc!: string;
  nomDiplome2!: string;
  cep!: string;

}
export class diplome {
  public diplome: string;
  public college: string;
  public annee: string;
  public mail : string;

  constructor(Diplome :string, college : string, annee :string ,mail : string)
  {
    this.diplome = Diplome;
    this.college = college;
    this.annee = annee;
    this.mail = mail
  }


  
  
}

