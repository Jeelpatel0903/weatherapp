import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  ApiKey: string = "d5f94928c506eb0b1ecad1837f96c1dd";
  weatherdata!: any
  error: boolean = false
  data : boolean = false;


  constructor(private api: HttpClient) { }
  


  searchfunction(data: any) {

    const getdataapi = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${this.ApiKey}&units=metric`
    this.api.get(getdataapi).subscribe(e => {

      if (this.weatherdata) {
        this.weatherdata = "";
      }
      this.weatherdata = e;
      console.log(e);
      this.error = false;
      this.data = true;
      
    }, err => {
      this.data = false;
      this.error = true
      console.log(err);

    })

  }

}
