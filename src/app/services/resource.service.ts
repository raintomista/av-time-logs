import { Response } from '@angular/http';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { appConfig } from './../app.config';
import { Injectable } from '@angular/core';


@Injectable()
export class ResourceService {

    constructor(private http: Http){

    }
    public cacheResource(resource, name: string) {
        window.localStorage.setItem(name, resource)
    }

    public getResource(name: string) {
        return window.localStorage.getItem(name);
    }

    public stringify(data) {
        return JSON.stringify(data);
    }

     getHeaders(){
		let headers = new Headers();
		headers.append('x-access-token', this.getResource('x-access-token'));		
		return headers;

	}

    public updateClock() {
        let currentTime = new Date(); 
        let currentHours = currentTime.getHours();
        let currentMinutes: any = currentTime.getMinutes();
        let currentSeconds: any = currentTime.getSeconds();

        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

        // Choose either "AM" or "PM" as appropriate
        let timeOfDay = (currentHours < 12) ? "AM" : "PM";

        // Convert the hours component to 12-hour format if needed
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

        // Convert an hours component of "0" to "12"
        currentHours = (currentHours == 0) ? 12 : currentHours;

        // Compose the string for display
        let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

        return currentTimeString;
    }

    public upload(params){
        let headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');
            
        return this.http.post(`${appConfig.CLOUDINARY_URL}/upload`, params, { headers }).map((response: Response) => response.json());
    }

}