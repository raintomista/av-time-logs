import { ResourceService } from './resource.service';
import {Injectable} from '@angular/core';
import {Http, Response,  Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NetworkService{
	public headers: Headers;
	constructor(private http: Http,  private resource: ResourceService){
		this.headers = new Headers({
			'x-access-token': this.resource.getResource('x-access-token')
		});
	}

	getNetworks(){
		return this.http.get('https://av-timelogs-api.herokuapp.com//timelogs/host', {headers: this.headers})
			.map((res:Response) => res.json());
	}
}