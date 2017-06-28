import { NetworkService } from './../../../../services/network.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'save-network',
  templateUrl: './save-network.component.html',
  styleUrls: ['./save-network.component.css'],
  providers: [NetworkService]
})
export class SaveNetworkComponent implements OnInit {
  client = {};

  constructor(private networkService: NetworkService) {
    this.networkService.getClientIP().subscribe(result => {
      this.client = result.data.geo;
      console.log(this.client);
    })
   }

  ngOnInit() {
  }
}
