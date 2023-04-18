import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
  
export class NavbarComponent implements OnInit{

  // Declaring properties used to populated menu items for Angular's Bootstrap menu items
  menuItems: any[];
  menuItemHome: any;

  // isMenuCollapsed is a boolean type property that is binded to Angular's Bootstrap Navbar directive, ngbCollapse, and gets toggle when the hamburger menu item and menu items get clicked.
  // This property is used to handle the expansion or collapse of the menu-items on click during the mobile view. Vanilla Bootstrap does not work properly with Angular.
  isMenuCollapsed: boolean = true;

  // ngOnInit is a callback method that gets called after the Component is initialized
  ngOnInit() {
    
    // Populating the menuItems array with a collection of objects used to populate the Angular Bootstrap Navigation Item
    this.menuItems = [
      {label: 'Home', route: '/home'},
      {label: 'Resume', route: '/resume'},
      {label: 'Interests', route: '/interests'},
      {label: 'Projects', route: '/projects'},
      {label: 'Gallery', route: '/gallery'},
      {label: 'Contact', route: '/contact'},
    ];

  // Populating the menuItemHome used to populated home menu item
    this.menuItemHome = {label: 'Home', route: '/home'};

  }

}
