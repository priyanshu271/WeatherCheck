import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import{OpenWeatherService} from "../open-weather.service"



@Component({
  selector: 'app-getweather',
  templateUrl: './getweather.component.html',
  styleUrls: ['./getweather.component.css']
})
export class GetweatherComponent implements OnInit {
  cityName: any;
  public weatherData: any;
  
  

  constructor(
    private openWeatherService: OpenWeatherService
  ) { }

  
  weatherInfo(cityName:string){
    console.log(cityName);
    this.openWeatherService
      .getWeather(this.cityName)
      .subscribe(data =>this.weatherData=data )
      console.log(this.weatherData);
    
   }


  ngOnInit(): void {
   

  }

}
