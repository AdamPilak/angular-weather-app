import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(`${environment.weatherApiBaseUrl}?q=${cityName}`, {
      headers: new HttpHeaders()
      .set(environment.XRapidApiHostHeaderName, environment.XRapidApiHostHeaderValue)
      .set(environment.XRapidApiKeyHeaderName, environment.XRapidApiKeyHeaderValue),
      params: new HttpParams()
    })
  }
}
