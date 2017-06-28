import { NetworkService } from './../../../../services/network.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'save-network',
  templateUrl: './save-network.component.html',
  styleUrls: ['./save-network.component.css'],
  providers: [NetworkService]
})
export class SaveNetworkComponent implements OnInit {
  client: any = {};
  description: string;
  private loading = true;

  constructor(private networkService: NetworkService) {
    this.networkService.getClientIP().subscribe(result => {
      this.client = result.data.geo;
      this.loading = false;
    })
   }

  ngOnInit() {
  }

  saveNetwork(){
    let network = {
      hostname: this.client.rdns,
      ip_address: this.client.ip,
      description: this.description
    }
    this.networkService.saveNetwork(network).subscribe(response =>{
      alert(response.message);
    });
  }


}
