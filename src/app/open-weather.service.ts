import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http:HttpClient) { }
  getWeather(loc:string){
    //console.log(loc+"yes");
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=b716198ce76fd6185d71b52480a33faa&query='+ loc
    );

  }
}
