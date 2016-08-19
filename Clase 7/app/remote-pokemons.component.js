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
var pokemon_json_service_1 = require('./pokemon-json.service');
var RemotePokemons = (function () {
    function RemotePokemons(pokemonJsonService) {
        this.pokemonJsonService = pokemonJsonService;
        this.pokemonsRem = [];
    }
    RemotePokemons.prototype.getJsonPokemons = function () {
        var _this = this;
        this.pokemonJsonService.pokemon_json
            .subscribe(function (pokemones) { return _this.pokemonsRem = pokemones; }, function (error) { return console.error('Error ' + error); }, function () { return console.log(_this.pokemonsRem); });
    };
    RemotePokemons = __decorate([
        core_1.Component({
            selector: 'remote-pokemons',
            template: "\n\t\t<h1>Remote Pokemons!</h1>\n\t",
            providers: [pokemon_json_service_1.PokemonJsonService]
        }), 
        __metadata('design:paramtypes', [pokemon_json_service_1.PokemonJsonService])
    ], RemotePokemons);
    return RemotePokemons;
}());
exports.RemotePokemons = RemotePokemons;
//# sourceMappingURL=remote-pokemons.component.js.map