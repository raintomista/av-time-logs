import { appConfig } from './../app.config';
import { ResourceService } from './resource.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NetworkService {
   public headers: Headers;
   constructor(private http: Http, private resource: ResourceService, private jsonp: Jsonp) {
      this.headers = new Headers({
         'x-access-token': this.resource.getResource('x-access-token')
      });
   }

   getNetworks() {
      return this.http.get(`${appConfig.apiURL}/timelogs/host`, { headers: this.headers })
         .map((res: Response) => res.json());
   }

   getRDNS(ip: String) {
      return this.http.get(`${appConfig.apiURL}/network/${ip}/rdns`, { headers: this.headers })
         .map((res: Response) => res.json());
   }

   getIPAddress() {
      return this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
         .map((res: Response) => {
            return res.json();
         });
   }

   getClientIP() {
      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
      headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

      return this.http.get('https://tools.keycdn.com/geo.json', { headers: headers })
         .map((res: Response) => res.json());
   }

   checkNetworkStatus(ip) {
      return this.http.post(`${appConfig.apiURL}/timelogs/host/status`, { ip: ip }, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }

   saveNetwork(network) {
      return this.http.post(`${appConfig.apiURL}/timelogs/add_host`, { data: network }, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }


   blacklist(_id) {
      return this.http.put(`${appConfig.apiURL}/timelogs/remove_host/${_id}`, {}, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }

   whitelist(_id) {
      return this.http.put(`${appConfig.apiURL}/timelogs/set_valid/${_id}`, {}, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }

   private getHeaders() {
      let headers = new Headers();
      headers.append('x-access-token', this.resource.getResource('x-access-token'));
      return headers;

   }
}
