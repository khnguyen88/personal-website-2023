import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private httpService: HttpClient) { }

  // The getInterests() method retrieves and return interests data and related image data from JSON
  getInterests() {

    // This method constructs and calls the HttpClient's get() method, which creates an observable and calls a get request to
    // retrieves data from a JSON file when subscribed, and will return the data.

    return this.httpService.get('../assets/json/interests.json');
  }
}