import { Component, OnInit } from '@angular/core';
import { Weather } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  weatherData?: Weather;
  cityName: string = 'Wloclawek';

  constructor(private weatherService: WeatherService) {}
  
  ngOnInit(): void {
    this.searchForWeather(this.cityName);
  }

  searchForWeather(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe(data => this.weatherData = data);
  }

  onSubmit(): void {
    this.searchForWeather(this.cityName);
    this.cityName = '';
  }
}
