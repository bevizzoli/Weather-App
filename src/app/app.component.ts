import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName: string = "London";
  weatherData?: WeatherData;
  requestsLimit?: any = 20;
  requestsRemaining?: any = 18;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }

  onSubmit(): void {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  private getWeather(cityName: string): void {
    this.weatherService.getCurrentWeatherByCityName(cityName)
      .subscribe({
        next: (weatherData: WeatherData) => {
          this.weatherData = weatherData;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
