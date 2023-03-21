import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems: any[];
  menuItemHome: any;

  ngOnInit(){
    this.menuItems = [
      {label: 'Home', route: 'home'},
      {label: 'Resume', route: 'resume'},
      {label: 'Interests', route: 'interests'},
      {label: 'Projects', route: 'projects'},
      {label: 'Gallery', route: 'gallery'},
      {label: 'Contact', route: 'contact'},
    ];

    this.menuItemHome = {label: 'Home', route: 'home'};

  }

}
