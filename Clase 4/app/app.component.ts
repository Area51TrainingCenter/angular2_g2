import { Component } from '@angular/core';

export class Pokemon{
  id: number;
  name: string;
  mainPower: string;
  type: string;
  status: boolean;
}

@Component({
  selector: 'my-app',
  template: `
  <h1>My {{ titleApp }}</h1>
  {{ 2 + 2 }}
  <div>
    {{ pickachu.name }}
    {{ pickachu.mainPower }}
    {{ pickachu.type }}
    {{ pickachu.status }}
  </div>
  `
})


export class AppComponent {
  titleApp = "Pokedex";
  message = "Sin mensaje";

  pickachu: Pokemon = {
    id: 1,
    name: 'Pikachu',
    mainPower: 'Attack Trueno',
    type: "Electrico",
    status: true
  };


}
