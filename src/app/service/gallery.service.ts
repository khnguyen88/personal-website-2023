import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpService: HttpClient) { }

  getGalleryImages() {
    return this.httpService.get('../assets/json/gallery-images.json');
  }
}
