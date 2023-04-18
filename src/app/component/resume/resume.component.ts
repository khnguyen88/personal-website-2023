import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ResumeService } from 'src/app/service/resume.service';
import { BaseComponent } from '../base-component/base-component.component';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
  
// We extended the ResumeComponent with the BaseComponent because we need to subscribe to an observable to retrieve our data, and the
// BaseComponent ensure we unsubscribe to the observable once component is destroyed  
  
// We implemented the OnInit interface and used it to initialize the data used to populate the template
export class ResumeComponent extends BaseComponent implements OnInit {

  // The resume property holds the JSON data retrieve as an array of objects
  // To be used to populate data in the Resume Template and we bpage
  resume: any = {} as any;

  // Ran into a minor issue where template/page renders before JSON data is loaded.
  // Solution is to use pipe async and only load page once data has been loaded and promise has been resolved.
  // Source: https://stackoverflow.com/questions/44900769/angular-wait-until-i-receive-data-before-loading-template
  // Declaring the Promise
  dataLoaded: Promise<boolean>;

  // Imported and injected the Resume Service through the class constructor's parameter
  constructor(private resumeService: ResumeService) {
    super()
  }

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {
    this.resumeService.getResume().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
      this.resume = result;
      this.dataLoaded = Promise.resolve(true);
    });
  }

}
