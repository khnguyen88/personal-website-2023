import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ResumeService } from 'src/app/service/resume.service';
import { BaseComponent } from '../base-component/base-component.component';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent extends BaseComponent implements OnInit {
  resume: any;

  constructor(private resumeService: ResumeService) {
    super()
  }

  ngOnInit() {
    this.resumeService.getResume().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => this.resume = result);
  }

}
