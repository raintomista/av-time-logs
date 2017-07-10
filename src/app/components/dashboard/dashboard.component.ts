import { AuthenticationService } from './../../services/authentication.service';
import { NetworkService } from './../../services/network.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NetworkService, AuthenticationService]
})
export class DashboardComponent implements OnInit {

  constructor(private networkService: NetworkService, private authService: AuthenticationService) { }

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
      localStorage.setItem('currentIP', network.ip);
      // this.networkService.checkNetworkStatus(network.ip).subscribe(res => {
      //   console.log(res);
      // });
    });
    // this.networkService.getClientIP().subscribe(result => {
    //   this.networkService.checkNetworkStatus(result.data.geo.ip).subscribe(network => {
    //     if(network.data.status === 0 || network.data === null){
    //       alert("Sorry but this network is blacklisted.")
    //       this.authService.logout();
    //     }
    //   });
    // })
  }

}
