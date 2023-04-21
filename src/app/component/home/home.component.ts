import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { HomeService } from 'src/app/service/home.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  
// We extended the HomeComponent with the BaseComponent because we need to subscribe to an observable to retrieve our data, and the
// BaseComponent ensure we unsubscribe to the observable once component is destroyed
  
// We implemented the OnInit interface and used it to initialize the data used to populate the template
export class HomeComponent extends BaseComponent implements OnInit {

  // The homeData property holds the JSON data retrieve as an array of objects
  // To be used to populate data in the Home Template and image elements attributes
  homeData: any = {} as any;

  // Stores the base directory of asset images folder
  // To be used to populate data in the Home Template and image elements attributes

  // Note: Make sure you reference your assets in terms relative paths, not absolute, else the Angular application 
  // won't work when served on subdirectory of the web server's root directory, just the root itself. 
  // Source: https://github.com/angular/angular-cli/issues/16076
  baseImageAssetDirectory: string = "./assets/images/";

  // Initialized navigational attributes for Angular's Bootstrap Carousel Component. 
  // These will disable the navigational arrows and items electors in the carousel.
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = false;
  carouselInterval: number = 15000;

  // Ran into a minor issue where template/page renders before JSON data is loaded. Solution is to use pipe async.
  // Solution is to use pipe async and only load page once data has been loaded and promise has been resolved.
  // Issue occurred where there is a complex JSON tree that is used to populate texts. Apply to pages on an as needed bases.
  // Source: https://stackoverflow.com/questions/44900769/angular-wait-until-i-receive-data-before-loading-template
  // Declaring the Promise
  dataLoaded: Promise<boolean>;

  // Imported and injected the Home Service through the class constructor's parameter
  constructor(private homeService: HomeService) {
    super()
  }

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {

    // We call and subscribe to the getHomeData() method to retrieve home (or about me description) data from JSON file and store it within a property
    // We utilized takeUntil to declarative unsubscribe to observable after Component is destroyed
    this.homeService.getHomeData().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
      this.homeData = result;

      // Setting the Promise as resolved once the data has been recieved from JSON
      this.dataLoaded = Promise.resolve(true);
    });
  }
}