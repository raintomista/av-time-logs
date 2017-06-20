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

	getUsers() {
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/all', {headers: this.headers})
			.map((res: Response) => res.json());
	}

	getOfflineUsers() {
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/status/0', {headers: this.headers})
			.map((res: Response) => res.json());
	}

	getOnlineUsers() {
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/status/1', {headers: this.headers})
			.map((res: Response) => res.json());
	}

	getUsersOnBreak() {
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/status/2', {headers: this.headers})
			.map((res: Response) => res.json());
	}
}