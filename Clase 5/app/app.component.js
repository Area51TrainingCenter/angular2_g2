"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pokemon_1 = require('./pokemon');
var pokemon_detail_component_1 = require('./pokemon-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.titleApp = "Pokedex";
        this.message = "Sin mensaje";
        this.pokemons = [];
        this.selectedPokemon = null;
        this.selectedPlayer = 'Parzival';
        this.pokemon = new pokemon_1.Pokemon();
        //keyboardValues: any = null;
        this.keyboardValues = null;
    }
    AppComponent.prototype.addPokemon = function () {
        var locPokemon = new pokemon_1.Pokemon();
        locPokemon.id = this.pokemons.length;
        locPokemon.name = this.pokemon.name;
        locPokemon.mainPower = this.pokemon.mainPower;
        locPokemon.type = this.pokemon.type;
        locPokemon.status = this.pokemon.status;
        this.pokemons.push(locPokemon);
        console.log(this.pokemons);
    };
    AppComponent.prototype.showPokemonDetail = function (pokemon) {
        console.log(pokemon);
        this.selectedPokemon = pokemon;
    };
    // onKey(event:any){
    //   this.keyboardValues = event.target.value;
    // }
    AppComponent.prototype.onKey = function (event) {
        this.keyboardValues = event.target.value;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>My {{ titleApp }}</h1>\n\n  <input (keyup)=\"onKey($event)\">\n  {{ keyboardValues }}\n\n<input [(ngModel)]=\"pokemon.name\" type=\"text\" placeholder=\"Nombre de pokemon\" >\n<input [(ngModel)]=\"pokemon.mainPower\" type=\"text\" placeholder=\"Poder\" >\n<input [(ngModel)]=\"pokemon.type\" type=\"text\" placeholder=\"Tipo\" >\n<input [(ngModel)]=\"pokemon.status\" type=\"text\" placeholder=\"Estatus\" >\n  <button (click)=\"addPokemon()\">Nuevo Pokemon</button>\n  <ul>\n    <li (click)=\"showPokemonDetail(pokemon)\"\n        *ngFor=\"let pokemon of pokemons;  let i = index\"\n        [class.selected]=\"pokemon === selectedPokemon\"\n        >\n    {{ i }}  {{ pokemon.name }}\n    </li>\n  </ul>\n\n  <pokemon-detail\n  *ngIf=\"selectedPokemon != null\"\n  [pokemon]=\"selectedPokemon\"\n  [player]=\"selectedPlayer\"></pokemon-detail>\n\n  ",
            styles: ["\n      .selected{\n        background-color: blue;\n        color: white;\n        font-weight: bold;\n      }\n    "],
            directives: [pokemon_detail_component_1.PokemonDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map