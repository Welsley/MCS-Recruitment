import { provideRouter, RouterConfig } from '@angular/router';
import { WeatherStationComponent } from './weather-station/weather-station.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './404/not-found.component';

const routes: RouterConfig = [
    {path: '', redirectTo: '/overview', pathMatch: 'full'},
    {path: 'overview', component: DashboardComponent},
    {path: 'weather-information', component: WeatherStationComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];
