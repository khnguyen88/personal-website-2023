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

    // Note: Make sure you reference your assets in terms relative paths, not absolute, else the Angular application 
    // won't work when served on subdirectory of the web server's root directory, just the root itself. 
    // Source: https://github.com/angular/angular-cli/issues/16076
    return this.httpService.get('./assets/json/interests.json');
  }
}