import { Component, OnInit } from '@angular/core';

// Using FontAwesome in Angular
// Sources: 
//    https://github.com/FortAwesome/angular-fontawesome
//    https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage.md
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'; // Font Awesome Library class. To use as a container to hold icons
import { faCoffee, faSquare, faCheckSquare} from '@fortawesome/free-solid-svg-icons'; // Imported Font Awesome icons used for testing
import { faGithub, faLinkedin, faInstagram, faStackOverflow, faYoutube} from '@fortawesome/free-brands-svg-icons'; // Imported Font Awesome icons used for footer

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Declared properties for the FooterComponent. 
  // They are used to store data to populate the footer.
  footerPersonalInfo: any;
  footerContactInfo: any;
  footerPersonalLinks: any;
  
  // Injecting the FaIconLibrary
  // Source: https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage/icon-library.md
  constructor(library: FaIconLibrary) {
    // Adding icons to the FaIconLibrary
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

  ngOnInit() {
    // Populating the footerPersonalInfo property
    this.footerPersonalInfo = {
      name: "Khiem Nguyen",
      profession1: "Software Engineer",
      profession2: "Civil Engineer, P.E."
    }

    // Populating the footerContactInfo property
    this.footerContactInfo = {
      header: "Contact",
      phoneNumber: "410-900-3533",
      emailAddress: "khnguyen88@gmail.com"
    }

    // Populating the footerPersonalLinks property

    // We could define the icons in two ways: icon-library approach, i.e. "faGithub", or explicit reference approach, i.e. "['fab', 'github']
    //  https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage.md
    // We are using the icon-library approach

    // For the external links, we need to provide the full URL path to pop open a link on a new window and not be bounded by the router path in Angular
    // Source: https://stackoverflow.com/questions/52240123/how-to-open-a-link-in-new-tab-using-angular
    this.footerPersonalLinks = {
      header: "Personal Links",
      links: [
        {
          name: "Github",
          url: "https://github.com/khnguyen88/",
          fontAwesomeIcon: ['fab', 'github'] 
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/khiem-nguyen-61771829/",
          fontAwesomeIcon: ['fab', 'linkedin']
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/instakhiem",
          fontAwesomeIcon: ['fab', 'instagram']
        },
        {
          name: "Youtube",
          url: "https://www.youtube.com/channel/UCkL6BMLciV4K1T954EB7_GA",
          fontAwesomeIcon: ['fab', 'youtube']
        }
      ]
    }
  }
}
