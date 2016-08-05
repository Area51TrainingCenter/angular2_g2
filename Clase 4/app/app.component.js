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
var Pokemon = (function () {
    function Pokemon() {
    }
    return Pokemon;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.titleApp = "Pokedex";
        this.message = "Sin mensaje";
        this.pokemons = [];
        this.selectedPokemon = {
            id: 0,
            name: '-',
            mainPower: '-',
            type: '-',
            status: false
        };
        this.pokemon = new Pokemon();
    }
    AppComponent.prototype.addPokemon = function () {
        var locPokemon = new Pokemon();
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>My {{ titleApp }}</h1>\n\n<input [(ngModel)]=\"pokemon.name\" type=\"text\" placeholder=\"Nombre de pokemon\" >\n<input [(ngModel)]=\"pokemon.mainPower\" type=\"text\" placeholder=\"Poder\" >\n<input [(ngModel)]=\"pokemon.type\" type=\"text\" placeholder=\"Tipo\" >\n<input [(ngModel)]=\"pokemon.status\" type=\"text\" placeholder=\"Estatus\" >\n  <button (click)=\"addPokemon()\">Nuevo Pokemon</button>\n  <ul>\n    <li (click)=\"showPokemonDetail(pokemon)\"\n        *ngFor=\"let pokemon of pokemons;  let i = index\"\n        [class.selected]=\"pokemon === selectedPokemon\"\n        >\n    {{ i }}  {{ pokemon.name }}\n    </li>\n  </ul>\n  <div class=\"pokemon\">\n    <span>{{selectedPokemon.id}}</span>\n    <span>{{selectedPokemon.name}}</span>\n    <span>{{selectedPokemon.mainPower}}</span>\n    <span>{{selectedPokemon.type}}</span>\n    <span>{{selectedPokemon.status}}</span>\n  </div>\n  ",
            styles: ["\n      .pokemon{\n        background-color: yellow;\n        color: black;\n        width: 300px;\n        height: 100px;\n        padding: 20px;\n        text-align: center;\n      }\n      span{\n        display: block;\n      }\n      .selected{\n        background-color: blue;\n        color: white;\n        font-weight: bold;\n      }\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map