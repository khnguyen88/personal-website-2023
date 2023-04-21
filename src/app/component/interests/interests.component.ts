import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { InterestsService } from 'src/app/service/interests.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
  
// We extended the InterestsComponent with the BaseComponent because we need to subscribe to an observable to retrieve our data, and the
// BaseComponent ensure we unsubscribe to the observable once component is destroyed  
  
// We implemented the OnInit interface and used it to initialize the data used to populate the template
export class InterestsComponent extends BaseComponent implements OnInit {

  // The interests property holds the JSON data retrieve as an array of objects
  // To be used to populate data in the Interests Template and image elements attributes
  interests: any;

  // Stores the base directory of asset images folder
  // To be used to populate data in the Interests Template and image elements attributes

  // Note: Make sure you reference your assets in terms relative paths, not absolute, else the Angular application 
  // won't work when served on subdirectory of the web server's root directory, just the root itself. 
  // Source: https://github.com/angular/angular-cli/issues/16076
  baseImageAssetDirectory: string = "./assets/images/";

  // NOTE: NOT NEEDED ANYMORE. LEFT TO SHOW WORK I DID.
  // Initialized navigational attributes for Angular's Bootstrap Carousel Component. 
  // These will disable the navigational arrows and items electors in the carousel.
  // showNavigationArrows: boolean = false;
  // showNavigationIndicators: boolean = false;
  // carouselInterval: number = 5000;

  // Imported and injected the Interests Service through the class constructor's parameter
  constructor(private interestsService: InterestsService) {
    super()
  }

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {

    // We call and subscribe to the getInterests() method to retrieve interests data and associated images data from JSON file and store it within a property
    // We utilized takeUntil to declarative unsubscribe to observable after Component is destroyed
    this.interestsService.getInterests().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => { this.interests = result; });
  }
}
