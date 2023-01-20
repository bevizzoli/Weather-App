import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../model/weather';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherByCityName(cityName: string): Observable<WeatherData> {
    const url: string = environment.API_Endpoint + "/current.json";
    return this.http.get<WeatherData>(url, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue),
      params: new HttpParams()
        .set('q', cityName)
    });
  }

}
