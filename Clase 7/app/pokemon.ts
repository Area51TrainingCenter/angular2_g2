export class Pokemon {
  id: number;
  name: string;
  mainPower: string;
  type: string;
  status: boolean;
  caughtDate: Date;

  constructor(){
    console.log('Ha nacido un nuevo Pokemon')
  }
}
