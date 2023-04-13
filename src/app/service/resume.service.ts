import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  // Imported and injected the HttpClient service through the class constructor's parameter
  constructor(private httpService: HttpClient) { }

  // The getResume() method retrieves and return resume data from JSON
  getResume() {

    // This method calls the HttpClient's get() method, which creates an observable and calls a get request to
    // retrieves data from a JSON file when subscribed, and will return the data.

    return this.httpService.get('../assets/json/resume.json');
  }
}
