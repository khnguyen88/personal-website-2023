import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/service/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resume: any;

  constructor(private resumeService: ResumeService){}

  ngOnInit() {
    this.resumeService.getResume().subscribe(result => this.resume = result);
  }

}
