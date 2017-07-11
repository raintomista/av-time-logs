import { appConfig } from './../app.config';
import { ResourceService } from './resource.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	public headers: Headers;
	
	constructor(private http: Http, private resource: ResourceService) {
		this.headers = new Headers({
			'x-access-token': this.resource.getResource('x-access-token')
		});
	}

	addUser(user:Object){
		console.log(JSON.stringify(user));
		return this.http.post(`${appConfig.apiURL}/users/create`, { data: user },  {headers: this.getHeaders()})
			.map((response: Response) => {
				console.log(response);
			});
	}

	editUser(user:Object){
		return this.http.post(`${appConfig.apiURL}/users/edit`, { data: user },  {headers: this.getHeaders()})
			.map((response: Response) => {
				return response.json();
			});
	}

	getUser(username) {
		return this.http.get(`${appConfig.apiURL}/users/${username}`, {headers: this.getHeaders()})
			.map((res: Response) => res.json());
	}

	getUsers() {
		return this.http.get(`${appConfig.apiURL}/users/all`, {headers: this.getHeaders()})
			.map((res: Response) => res.json());
	}

	getOfflineUsers() {
		return this.http.get(`${appConfig.apiURL}/users/status/0`, {headers: this.getHeaders()})
			.map((res: Response) => res.json());
	}

	getOnlineUsers() {
		return this.http.get(`${appConfig.apiURL}/users/status/1`, {headers: this.getHeaders()})
			.map((res: Response) => res.json());
	}

	getUsersOnBreak() {
		return this.http.get(`${appConfig.apiURL}/users/status/2`, {headers: this.getHeaders()})
			.map((res: Response) => res.json());
	}

	suspendUser(username: string){
		return this.http.post(`${appConfig.apiURL}/users/suspend-user`, { username: username}, {headers: this.getHeaders()})
			.map((res: Response) => res.json());
	}

	unsuspendUser(username: string){
		return this.http.post(`${appConfig.apiURL}/users/unsuspend-user`, { username: username}, {headers: this.getHeaders()})
			.map((res: Response) => res.json());
	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('x-access-token', this.resource.getResource('x-access-token'));		
		return headers;

	}
}