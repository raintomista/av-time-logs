import { AuthenticationService } from './../../../services/authentication.service';
import { NetworkService } from './../../../services/network.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private networkService: NetworkService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.checkNetwork();
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
