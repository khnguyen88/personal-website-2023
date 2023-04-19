import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpClient) { }

  // The getHomeData() method retrieves and return home (personal about me) data and related image data from JSON
  getHomeData() {

    // This method constructs and calls the HttpClient's get() method, which creates an observable and calls a get request to
    // retrieves data from a JSON file when subscribed, and will return the data.

    return this.httpService.get('../assets/json/home.json');
  }
}
