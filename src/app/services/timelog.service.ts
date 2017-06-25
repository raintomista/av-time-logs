import { appConfig } from './../app.config';
import { ResourceService } from './resource.service';
import {Injectable} from '@angular/core';
import {Http, Response,  Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TimelogService{
	public headers: Headers;
	constructor(private http: Http,  private resource: ResourceService){

	}

	getTimelogs(){
		return this.http.get(`${appConfig.apiURL}/timelogs/all`, {headers: this.getHeaders()})
			.map((res:Response) => res.json());
	}

	timeIn(username: string){
		console.log(username);
		
		return this.http.post(`${appConfig.apiURL}/time-in`, {username: username}, {headers: this.getHeaders()});
	}

	timeOut(username: string){
		console.log(username);
		return this.http.post(`${appConfig.apiURL}/time-out`, {username: username}, {headers: this.getHeaders()});
	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('x-access-token', this.resource.getResource('x-access-token'));		
		return headers;

	}
}