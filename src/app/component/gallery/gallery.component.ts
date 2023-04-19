import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { GalleryService } from 'src/app/service/gallery.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Since there's a possibility that the content on our page might change due to an event, we want to change the dectection stategy to OnPush
})

// We extended the GalleryComponent with the BaseComponent because we need to subscribe to an observable to retrieve our data, and the
// BaseComponent ensure we unsubscribe to the observable once component is destroyed  
  
// We implemented the OnInit interface and used it to initialize the data used to populate the template
export class GalleryComponent extends BaseComponent implements OnInit {

  // The imageGallery property holds the JSON data retrieve as an array of objects
  // To be used to populate data in the Gallery Template and image elements attributes
  imageGallery: any;

  // Stores the base directory of asset images folder
  // To be used to populate data in the Gallery Template and image elements attributes
  baseImageAssetDirectory: string = "../../../assets/images/";

  // Imported and injected the Gallery Service through the class constructor's parameter
  // Imported and injected the ChangeDetectorRef class in order to use it's detectChanges() to flag situations where data used for page content might change to rerender page content
  // ChangeDetectorRef Source: https://www.digitalocean.com/community/tutorials/angular-change-detection-strategy
  constructor(private galleryService: GalleryService, private cdr: ChangeDetectorRef) {
    super()
  }

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {

    // We call and subscribe to the getGalleryImage() method to retrieve gallery images data from JSON file and store it within a property
    // We utilized takeUntil to declarative unsubscribe to observable after Component is destroyed
    this.galleryService.getGalleryImages().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
      this.imageGallery = result;
      this.shuffleArray(this.imageGallery); // We shuffle the image gallery initially
      this.cdr.detectChanges(); //Since we updated changeDetection to OnPush, we need to call the detectChanges() method here.
    });
  }

  // shuffleArray() method - shuffle order of an array. To be used to shuffle images in gallery
  shuffleArray(someArray: any[]) {
    // Shuffle array, by iterating through each elements in array list, and swapping
    // element at position "i" with an element of a randomize position
    // Will use Math.random() method to randomize. Source: https://typescript.helpful.codes/tutorials/How-to-generate-and-use-Random-Numbers/
    // Will use destructuring to swap elements. Source: https://www.freecodecamp.org/news/swap-two-array-elements-in-javascript/
    
    for (let i = 0; i < someArray.length; i++){
      let r = Math.floor(Math.random() * someArray.length);
      [someArray[i], someArray[r]] = [someArray[r], someArray[i]];
    }
  }

  // Event handling method used to bind to click event. Intended to shuffle gallery on click.
  onClickShuffle() {
    this.shuffleArray(this.imageGallery); // We changed the data of the page content here.
    this.cdr.detectChanges(); //Since we updated changeDetection to OnPush, we need to call the detectChanges() method here.
  }
}
