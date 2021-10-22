import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/* export interface WeatherData {
    temp: number;
    humid: number;
    baro: number;
    wind_dir: number;
    wind_len: number;
} */

export interface WeatherData {
    data: number;
}

@Injectable()
export class WeatherStationService {
    private _url: string = 'http://meteo.physic.ut.ee/xml/data3.php';

    constructor(private _http: Http) {

    }

    public FetchData(): Observable<WeatherData[]> {
    // public FetchData(): WeatherData {        
        return this._http.get(this._url).map((data: Response) => {
            let xml = data["data"];
            let parser = require('xml-js');
            let result: any;
            result = parser.xml2json(xml, {compact: false, spaces: 4});
            return result.json();
            // return data.json();
        });
    }
}
