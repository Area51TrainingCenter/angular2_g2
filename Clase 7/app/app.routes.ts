import { provideRouter, RouterConfig} from '@angular/router';
import { RemotePokemons } from './remote-pokemons.component';

export const routes: RouterConfig = [
	{
		path: '',
		component: RemotePokemons
	},{
		path: 'trainers',
		component: RemoteTrainers
	}
]


export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]