import { NetworkService } from './../../../../services/network.service';
import { Component } from '@angular/core';

@Component({
  selector: 'save-network',
  templateUrl: './save-network.component.html',
  styleUrls: ['./save-network.component.css'],
  providers: [NetworkService]
})
export class SaveNetworkComponent{
  private client: any = {};
  private description: string;
  private loading: boolean;

  constructor(private networkService: NetworkService) {
    this.loading = true; //Indicates that RDNS is not yet done
    this.client.ip = localStorage.getItem('currentIP'); //Gets the Current IP Address
    this.networkService.getRDNS(this.client.ip).subscribe(response => {
      this.client.rdns = response.data; //Reverse DNS Lookup
      this.loading = false; //Indicate that RDNS is done
    });
   }

  saveNetwork(){
    let network = {
      hostname: this.client.rdns,
      ip_address: this.client.ip,
      description: this.description
    }

    this.networkService.checkNetworkStatus(network.ip_address).subscribe(response => {
      if(response.data){ //Alert that Network Already Exists in Database
        alert('Network already exists in Database.');
        this.description = ''; //Resets description field
      }
      else{ // Save Network to Database
        this.networkService.saveNetwork(network).subscribe(response =>{ 
          alert(response.message)
          this.description = ''; //Resets description Field
        });
      }
    });


  }


}
