
export class Cv {
  formation!: string;
  themeFormation1!: string;
  descriptionFormation1!: string;
  themeFormation2!: string;
  descriptionFormation2!: string;
}

export class formation {
  public titre!: string;
  public entreprise!: string;
  public peroide!: string;
  public details!: string;
  public mail : string;
  

  constructor(titre :string, entreprise : string, periode :string,details : string,mail :string)
  {
    this.mail = mail
    this.titre = titre;
    this.peroide = entreprise;
    this.details = periode;
    this.entreprise = details;
  }

}