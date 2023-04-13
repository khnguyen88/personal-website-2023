import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { GalleryService } from 'src/app/service/gallery.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

// We extended the GalleryComponent with the BaseComponent because we need to subscribe to an observable to retrieve our data, and the
// BaseComponent ensure we unsubscribe to the observable once component is destroyed  
  
// We implemented the OnInit interface and used to initialize the data used to populate the template
export class GalleryComponent extends BaseComponent implements OnInit{

  // The imageGallery property holds the JSON data retrieve as an array of objects
  // To be used to populate data in the Gallery Template and we bpage
  imageGallery: any;

  // Imported and injected the Gallery Service through the class constructor's parameter
  constructor(private galleryService: GalleryService) {
    super()
  }

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {

    // We call and subscribe to the getGalleryImage() method to retrieve gallery images data from JSON file and store it within a property
    // We utilized takeUntil to declarative unsubscribe to observable after Component is destroyed
    this.galleryService.getGalleryImages().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => { this.imageGallery = result; });
  }
}
