import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TimelogService{
	constructor(private http: Http){
		console.log("dadada");
	}

	getTimelogs(){
		return this.http.get('https://av-timelogs-api.herokuapp.com/timelogs/all')
			.map((res:Response) => res.json());
	}
}