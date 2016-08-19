"use strict";
var router_1 = require('@angular/router');
var remote_pokemons_component_1 = require('./remote-pokemons.component');
exports.routes = [
    {
        path: '',
        component: remote_pokemons_component_1.RemotePokemons
    }, {
        path: '/trainers',
        component: RemoteTrainers
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map