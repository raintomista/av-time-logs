import { appConfig } from './../app.config';
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
		return this.http.get(`${appConfig.apiURL}/timelogs/host`, {headers: this.headers})
			.map((res:Response) => res.json());
	}

	getClientIP(){
		let headers = new Headers();
		headers.append('Access-Control-Allow-Origin', '*');
		// headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
		// headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
		
		return this.http.get('https://tools.keycdn.com/geo.json', {headers: headers})
			.map((res:Response) => res.json());
	}

	saveNetwork(network){
		return this.http.post(`${appConfig.apiURL}/timelogs/add_host`, {data: network}, {headers: this.getHeaders()})
			.map((res:Response) => res.json());
	}


	blacklist(_id){
		return this.http.put(`${appConfig.apiURL}/timelogs/remove_host/${_id}`, {}, {headers: this.getHeaders()})
			.map((res:Response) => res.json());
	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('x-access-token', this.resource.getResource('x-access-token'));		
		return headers;

	}
}