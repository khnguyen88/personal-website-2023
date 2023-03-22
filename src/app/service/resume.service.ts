import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private httpService: HttpClient) { }

  getResume(){
    return this.httpService.get('../assets/json/resume.json');
  }
}
