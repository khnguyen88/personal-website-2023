import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSquare, faCheckSquare} from '@fortawesome/free-solid-svg-icons'; // Imported icons to test
import { faGithub, faLinkedin, faInstagram, faStackOverflow, faYoutube} from '@fortawesome/free-brands-svg-icons'; // Imported icons to use

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCoffee,
      faSquare,
      faCheckSquare,
      faLinkedin,
      faInstagram,
      faStackOverflow,
      faGithub,
      faYoutube
    );
  }
}
