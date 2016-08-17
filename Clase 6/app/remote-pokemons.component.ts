import { Component } from '@angular/core';
import { Pokemon } from './pokemon'
import { PokemonJsonService } from './pokemon-json.service'

@Component({
	selector: 'remote-pokemons',
	template: `
		<h1>Remote Pokemons!</h1>
	`,
	providers: [PokemonJsonService]
})


export class RemotePokemons {
	pokemonsRem: Pokemon[] = [];
	
	constructor(
	  private pokemonJsonService: PokemonJsonService){}

	getJsonPokemons(){
	  this.pokemonJsonService.pokemon_json
	  .subscribe(
	      (pokemones: any) => this.pokemonsRem = pokemones,
	      (error: any) => console.error('Error ' +  error),
	      () => console.log(this.pokemonsRem)
	  )
	}
}


