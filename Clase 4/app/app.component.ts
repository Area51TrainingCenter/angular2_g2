import { Component } from '@angular/core';

class Pokemon {
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

<input [(ngModel)]="pokemon.name" type="text" placeholder="Nombre de pokemon" >
<input [(ngModel)]="pokemon.mainPower" type="text" placeholder="Poder" >
<input [(ngModel)]="pokemon.type" type="text" placeholder="Tipo" >
<input [(ngModel)]="pokemon.status" type="text" placeholder="Estatus" >
  <button (click)="addPokemon()">Nuevo Pokemon</button>
  <ul>
    <li (click)="showPokemonDetail(pokemon)"
        *ngFor="let pokemon of pokemons;  let i = index"
        [class.selected]="pokemon === selectedPokemon"
        >
    {{ i }}  {{ pokemon.name }}
    </li>
  </ul>
  <div class="pokemon">
    <span>{{selectedPokemon.id}}</span>
    <span>{{selectedPokemon.name}}</span>
    <span>{{selectedPokemon.mainPower}}</span>
    <span>{{selectedPokemon.type}}</span>
    <span>{{selectedPokemon.status}}</span>
  </div>
  `,
    styles: [`
      .pokemon{
        background-color: yellow;
        color: black;
        width: 300px;
        height: 100px;
        padding: 20px;
        text-align: center;
      }
      span{
        display: block;
      }
      .selected{
        background-color: blue;
        color: white;
        font-weight: bold;
      }

    `]
})


export class AppComponent {
    titleApp = "Pokedex";
    message = "Sin mensaje";
    pokemons: Pokemon[] = [];
    selectedPokemon: Pokemon = {
      id:0,
      name:'-',
      mainPower:'-',
      type:'-',
      status:false
    };

    pokemon = new Pokemon()i

    addPokemon() {
        let locPokemon = new Pokemon();
        locPokemon.id = this.pokemons.length;
        locPokemon.name = this.pokemon.name;

        locPokemon.mainPower = this.pokemon.mainPower;
        locPokemon.type = this.pokemon.type;
        locPokemon.status = this.pokemon.status;

        this.pokemons.push(locPokemon);
        console.log(this.pokemons)
    }
    showPokemonDetail(pokemon) {
        console.log(pokemon)
        this.selectedPokemon = pokemon
    }

}
