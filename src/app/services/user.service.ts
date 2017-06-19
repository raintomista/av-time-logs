import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService{
	constructor(private http: Http){
	}

	getUsers(){
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/all')
			.map((res:Response) => res.json());
	}

	getOfflineUsers(){
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/status/0')
			.map((res:Response) => res.json());
	}

	getOnlineUsers(){
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/status/1')
			.map((res:Response) => res.json());
	}

	getUsersOnBreak(){
		return this.http.get('https://av-timelogs-api.herokuapp.com/users/status/2')
			.map((res:Response) => res.json());
	}
}