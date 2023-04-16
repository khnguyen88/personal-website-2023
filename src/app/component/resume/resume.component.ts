import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ResumeService } from 'src/app/service/resume.service';
import { BaseComponent } from '../base-component/base-component.component';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
  
// We extended the GalleryComponent with the BaseComponent because we need to subscribe to an observable to retrieve our data, and the
// BaseComponent ensure we unsubscribe to the observable once component is destroyed  
  
// We implemented the OnInit interface and used it to initialize the data used to populate the template
export class ResumeComponent extends BaseComponent implements OnInit {

  // The resume property holds the JSON data retrieve as an array of objects
  // To be used to populate data in the Gallery Template and we bpage
  resume: any;

  // Imported and injected the Resume Service through the class constructor's parameter
  constructor(private resumeService: ResumeService) {
    super()
  }

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {
    this.resumeService.getResume().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => this.resume = result);
  }

}
