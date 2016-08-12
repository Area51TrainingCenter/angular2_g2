import { Component, Input } from '@angular/core';
import { Pokemon } from "./pokemon";

@Component({
    selector: 'pokemon-detail',
    template: `
  <div class="pokemon">
    <span>{{pokemon.id}}</span>
    <span>{{pokemon.name}}</span>
    <span>{{pokemon.mainPower}}</span>
    <span>{{pokemon.type}}</span>
    <span>{{pokemon.status}}</span>
  </div>
  {{ player }}
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
    `]
})

export class PokemonDetailComponent{
  @Input() pokemon: Pokemon;
  @Input() player: string;
}
