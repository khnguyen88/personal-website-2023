import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpService: HttpClient) { }

  // The getProjectsData() method retrieves and return projects data and related image data from JSON
  getProjectsData() {
    
    // This method constructs and calls the HttpClient's get() method, which creates an observable and calls a get request to
    // retrieves data from a JSON file when subscribed, and will return the data.

    return this.httpService.get('../assets/json/projects.json');
  }
}
