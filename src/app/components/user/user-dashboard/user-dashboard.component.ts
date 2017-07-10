import { AuthenticationService } from './../../../services/authentication.service';
import { NetworkService } from './../../../services/network.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers:[NetworkService, AuthenticationService]
})
export class UserDashboardComponent implements OnInit {

  constructor(private networkService: NetworkService, private authService: AuthenticationService  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.checkNetwork();
     $('.ui.dropdown').dropdown();
     $('a.sidebar-toggle').click(function () {
       $('#sidebar').sidebar('toggle')
     })
     $('#sidebar a.item.link').click(function () {
       $('#sidebar').sidebar('toggle')
     })
  }

  checkNetwork(){
    this.networkService.getIPAddress().subscribe(network => {
      localStorage.setItem('currentIP', network.ip); //Get Current IP Address
      this.networkService.checkNetworkStatus(network.ip) //Check the IP Address in the Database
        .subscribe(response => {
          if(response.data === null){ //Network is not found in the database
            alert("Sorry but this network is not found in the database");  
            this.authService.logout();                      
          }
          else if(response.data !== null && response.data.status === 0){ //Network is blacklisted
            alert("Sorry but this network is blacklisted.")
            this.authService.logout();
          }
        });
    });
  }
}
