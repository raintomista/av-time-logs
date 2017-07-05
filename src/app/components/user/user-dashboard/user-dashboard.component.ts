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
    this.networkService.getClientIP().subscribe(result => {
      this.networkService.checkNetworkStatus(result.data.geo.ip).subscribe(network => {
        if(network.data.status === 0 || network.data === null){
          alert("Sorry but this network is blacklisted.")
          this.authService.logout();
        }
      });
    })
  }

}
