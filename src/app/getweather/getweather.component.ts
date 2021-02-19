import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ViewChild, ElementRef} from '@angular/core';
import{OpenWeatherService} from "../open-weather.service"



@Component({
  selector: 'app-getweather',
  templateUrl: './getweather.component.html',
  styleUrls: ['./getweather.component.css']
})
export class GetweatherComponent implements OnInit {
  
  public weatherData: any;
  
  

  constructor(
    private openWeatherService: OpenWeatherService
  ) { }

  
  weatherInfo(city:HTMLInputElement){
   // console.log(city);
    this.openWeatherService
      .getWeather(city.value)
      .subscribe(data =>this.weatherData=data )
      console.log(this.weatherData);
    
   }


  ngOnInit(): void {
   

  }

}
