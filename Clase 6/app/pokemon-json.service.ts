import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PokemonJsonService{
  pokemon_json: any;
  constructor(http:Http){
    this.pokemon_json = http.get('bd_pokemon/pokemons.json')
    .map(response => response.json())
  }
}
