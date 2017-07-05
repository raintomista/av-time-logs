import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
  	'./navbar.component.css',
  ],
  providers: [AuthenticationService]
})
export class NavbarComponent implements OnInit {
  user = {}
  constructor(private authenticationService: AuthenticationService) { 
    this.user = JSON.parse(window.localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
     
  }

  logOut(){
    this.authenticationService.logout();
  }

  settings(){
    
  }

}
