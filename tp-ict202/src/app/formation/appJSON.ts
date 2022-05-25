
export class Cv {
  formation!: string;
  themeFormation1!: string;
  descriptionFormation1!: string;
  themeFormation2!: string;
  descriptionFormation2!: string;
}

export class formation {
  public lieu!: string;
  public andebut!: string;
  public anfin!: string;
  public Text!: string;

  constructor(Lieu :string, Andebut : string, Anfin :string,text : string)
  {
    this.lieu = Lieu;
    this.andebut = Andebut;
    this.anfin = Anfin;
    this.Text = text;
  }

}