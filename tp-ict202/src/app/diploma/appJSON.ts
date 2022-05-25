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
  public diploma: string;
  public college: string;
  public annee: string;

  constructor(Diplome :string, college : string, annee :string)
  {
    this.diploma = Diplome;
    this.college = college;
    this.annee = annee;
  }

  
}