import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS, HTTP_BINDINGS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes'


bootstrap(AppComponent, [HTTP_PROVIDERS, HTTP_BINDINGS, APP_ROUTER_PROVIDERS]);
