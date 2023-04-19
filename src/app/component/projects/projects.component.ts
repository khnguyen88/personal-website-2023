import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { ProjectsService } from 'src/app/service/projects.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends BaseComponent implements OnInit {

  // The projectsData property holds the JSON data retrieve as an array of objects
  // To be used to populate data in the Projects Template and image elements attributes
  projectsData: any = {} as any;

  // Stores the base directory of asset images folder
  // To be used to populate data in the Projects Template and image elements attributes
  baseImageAssetDirectory: string = "../../../assets/images/";


  // Ran into a minor issue where template/page renders before JSON data is loaded. Solution is to use pipe async.
  // Solution is to use pipe async and only load page once data has been loaded and promise has been resolved.
  // Issue occurred where there is a complex JSON tree that is used to populate texts. Apply to pages on an as needed bases.
  // Source: https://stackoverflow.com/questions/44900769/angular-wait-until-i-receive-data-before-loading-template
  // Declaring the Promise
  dataLoaded: Promise<boolean>;

  // Imported and injected the Projects Service through the class constructor's parameter
  constructor(private projectsService: ProjectsService) {
    super()
  }

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {

    // We call and subscribe to the getProjectsData() method to retrieve projects data from JSON file and store it within a property
    // We utilized takeUntil to declarative unsubscribe to observable after Component is destroyed
    this.projectsService.getProjectsData().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
      this.projectsData = result;

      // Setting the Promise as resolved once the data has been recieved from JSON
      this.dataLoaded = Promise.resolve(true);
    });
  }
}