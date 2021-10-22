import { Component, Inject, OnInit } from '@angular/core';
import { WeatherStationService, WeatherData } from './weather-station.service';

@Component({
    templateUrl: './weather-station.html',
    styleUrls: ['./weather-station.css'],
    providers: [WeatherStationService]
})

// export class WeatherStationComponent {
export class WeatherStationComponent implements OnInit {    
    public status = new Date();
    public result: WeatherData[];

    constructor(@Inject(WeatherStationService) private _service: WeatherStationService) {
        // this.result = this._service.FetchData();
    }
    
    ngOnInit() {
        this._service.FetchData().subscribe((weatherData) => this.result = weatherData);
        // this.result = this._service.FetchData();
    }
}
