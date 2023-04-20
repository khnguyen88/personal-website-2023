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


  // Check if shuffledGalleryState has been stored in a local storage (Web Storage). 
  // If not use localStorage to save file. This is my alternative to cookies for now. I need to figure out to get Angular to talk to a server-side framework to set and retrieve cookies.
  // Downside with localStorage is it does not really expire and only gets removed when browser cache is cleared.
  // source: https://stackoverflow.com/questions/29960037/localstorage-vs-sessionstorage-vs-cookies
  isGalleryShuffled: boolean = localStorage.getItem('shuffledCollection') ? true : false;

  // Check if normallyGalleryState has been stored in a local storage
  isOriginalGalleryLocal: boolean = localStorage.getItem('imageCollection') ? true : false;

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

    // We check if the shuffled imageGallery data has been saved locally via Web Storage
    // If not, we'll just retrieve the normal imageGallery data from JSON and set it.
    if(!this.isGalleryShuffled){
      // We call and subscribe to the getGalleryImage() method to retrieve gallery images data from JSON file and store it within a property
      // We utilized takeUntil to declarative unsubscribe to observable after Component is destroyed
      this.galleryService.getGalleryImages().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
        this.imageGallery = result;
        localStorage.setItem('imageCollection', JSON.stringify(this.imageGallery));
        localStorage.setItem('shuffledCollection', JSON.stringify(this.imageGallery));
        this.cdr.detectChanges(); //Since we updated changeDetection to OnPush, we need to call the detectChanges() method here.
      });
    }
    else {
      // We assign the property imageGallery to the data we retrieve from shuffled Gallery collection localStorage, if it does not exist, we to the orginal collection or nothing.
      this.imageGallery = JSON.parse(localStorage.getItem('shuffledCollection') ||
        localStorage.getItem('imageCollection') || '{}');
    }
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
    localStorage.setItem('shuffledCollection', JSON.stringify(this.imageGallery)); // We store the new shuffled gallery data in the local storage
    this.cdr.detectChanges(); //Since we updated changeDetection to OnPush, we need to call the detectChanges() method here.
  }

    // Event handling method used to bind to click event. Intended to reset gallery on click.
  onClickReset() {
    // We check if the original imageGallery data has been saved locally via Web Storage. If so we assigned it to the imageGallery property
    if (this.isOriginalGalleryLocal) {
            this.imageGallery = JSON.parse(localStorage.getItem('imageCollection') || '{}');
    }
    else {
      // Else, We recall and subscribe to the getGalleryImage() method to retrieve gallery images data from JSON file and store it within a property
      // We utilized takeUntil to declarative unsubscribe to observable after Component is destroyed
      this.galleryService.getGalleryImages().pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
        this.imageGallery = result; // We assigned the imageryGallery property to the result.
        localStorage.setItem('imageCollection', JSON.stringify(this.imageGallery)); // We set the imageCollection local storage
        localStorage.setItem('shuffledCollection', JSON.stringify(this.imageGallery)); // We reset the shuffleCollection local storage
        this.cdr.detectChanges(); //Since we updated changeDetection to OnPush, we need to call the detectChanges() method here.
      });
    }
  }
}
