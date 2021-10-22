import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, appRouterProviders } from './app';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  Title,
  HTTP_PROVIDERS,
  appRouterProviders,
]).catch(err => console.error(err));
