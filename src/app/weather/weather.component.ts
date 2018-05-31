import {Component, Input, OnInit} from '@angular/core';
import {IPlace, IWeather} from '../places';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public weather: IWeather;

  constructor() { }

  ngOnInit() {
    console.log(this.weather);
  }

}
