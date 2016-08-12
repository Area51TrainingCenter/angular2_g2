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
var pokemon_1 = require("./pokemon");
var PokemonDetailComponent = (function () {
    function PokemonDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pokemon_1.Pokemon)
    ], PokemonDetailComponent.prototype, "pokemon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PokemonDetailComponent.prototype, "player", void 0);
    PokemonDetailComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-detail',
            template: "\n  <div class=\"pokemon\">\n    <span>{{pokemon.id}}</span>\n    <span>{{pokemon.name}}</span>\n    <span>{{pokemon.mainPower}}</span>\n    <span>{{pokemon.type}}</span>\n    <span>{{pokemon.status}}</span>\n  </div>\n  {{ player }}\n  ",
            styles: ["\n    .pokemon{\n      background-color: yellow;\n      color: black;\n      width: 300px;\n      height: 100px;\n      padding: 20px;\n      text-align: center;\n    }\n    span{\n      display: block;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());
exports.PokemonDetailComponent = PokemonDetailComponent;
//# sourceMappingURL=pokemon-detail.component.js.map