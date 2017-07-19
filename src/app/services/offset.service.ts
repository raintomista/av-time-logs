import { appConfig } from './../app.config';
import { ResourceService } from './resource.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class OffsetService {
   constructor(private http: Http, private resource: ResourceService) { }

   getOffsets() {
      return this.http.get(`${appConfig.apiURL}/offset/all`, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }

   getUserOffsets(username) {
      return this.http.get(`${appConfig.apiURL}/offset/user/${username}`, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }

   setRemarks(data) {
      return this.http.post(`${appConfig.apiURL}/offset/${data._id}/add_remarks`, { data: { remarks: data.remarks } }, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }

   setOffsetValid(_id: String) {
      return this.http.put(`${appConfig.apiURL}/offset/${_id}/set_valid`, {}, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }
   setOffsetInvalid(_id: String) {
      return this.http.put(`${appConfig.apiURL}/offset/${_id}/set_invalid`, {}, { headers: this.getHeaders() })
         .map((res: Response) => res.json());
   }

   private getHeaders() {
      let headers = new Headers();
      headers.append('x-access-token', this.resource.getResource('x-access-token'));
      return headers;

   }
}
