import { Component } from '@angular/core';
import { Pokemon } from './pokemon'
import { PokemonDetailComponent } from './pokemon-detail.component'
import { PokemonService } from './pokemon.service'
import { PokemonJsonService } from './pokemon-json.service'


@Component({
    selector: 'my-app',
    template: `
  <h1>My {{ titleApp }}</h1>

  <input (keyup)="onKey($event)">
  {{ keyboardValues }}

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

  <pokemon-detail
  *ngIf="selectedPokemon != null"
  [pokemon]="selectedPokemon"
  [player]="selectedPlayer"></pokemon-detail>

  <button (click)="getPokemons()">Check Pokemon</button>
  <button (click)="getJsonPokemons()">Get remote Pokemon</button>

  `,
    styles: [`
      .selected{
        background-color: blue;
        color: white;
        font-weight: bold;
      }
    `],
    directives:[PokemonDetailComponent],
    providers: [PokemonService, PokemonJsonService]
})


export class AppComponent {
    titleApp = "Pokedex";
    message = "Sin mensaje";
    pokemons: Pokemon[] = [];
    selectedPokemon: Pokemon = null;
    selectedPlayer:string = 'Parzival'

    pokemon = new Pokemon();
    pokemonsRem: Pokemon[] = [];

    //keyboardValues: any = null;
    keyboardValues: string = null;

    constructor(
      private pokemonService: PokemonService,
      private pokemonJsonService: PokemonJsonService){}

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
    showPokemonDetail(pokemon: Pokemon) {
        console.log(pokemon)
        this.selectedPokemon = pokemon
    }

    // onKey(event:any){
    //   this.keyboardValues = event.target.value;
    // }

    onKey(event:KeyboardEvent){
      this.keyboardValues = (<HTMLInputElement>event.target).value;
    }

    getPokemons(){
      this.pokemonService.getPokemons()
      .then(pokemons => this.pokemons = pokemons)
      .catch(this.handleError)


      console.log('---')
      console.log('--->', this.pokemons)
    }

    handleError(error: any){
      let errorMsg = error.message
      return Promise.reject(errorMsg)
    }


    getJsonPokemons(){
      this.pokemonJsonService.pokemon_json
      .subscribe(
          (pokemones: any) => this.pokemonsRem = pokemones,
          (error: any) => console.error('Error ' +  error),
          () => console.log(this.pokemonsRem)
      )
    }

}
