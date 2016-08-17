import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONES } from './pokemon-db';

@Injectable()

export class PokemonService{
  getPokemons(){
    return Promise.resolve(POKEMONES);
  }
}
