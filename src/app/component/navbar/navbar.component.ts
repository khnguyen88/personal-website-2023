import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems: any[];
  menuItemHome: any;

  isMenuCollapsed: boolean = true;

  ngOnInit(){
    this.menuItems = [
      {label: 'Home', route: '/home'},
      {label: 'Resume', route: '/resume'},
      {label: 'Interests', route: '/interests'},
      {label: 'Projects', route: '/projects'},
      {label: 'Gallery', route: '/gallery'},
      {label: 'Contact', route: '/contact'},
    ];

    this.menuItemHome = {label: 'Home', route: '/home'};

  }


  clickMe(){
    // TODO: Write a function that will collapse navigation menu upon link click in mobile mode. Currently default boostrap does not support
    // this behavior

    // https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-collapse.php
    // https://getbootstrap.com/docs/5.3/components/collapse/#how-it-works
    // https://stackoverflow.com/questions/49526681/how-to-call-javascript-functions-from-typescript-in-angular-5

    if (window.innerWidth < 500){
      alert("Less than 500");

    }
    else{
      alert("Greater than 500");
    }

  }

}
