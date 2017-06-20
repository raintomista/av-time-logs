import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService {

    public cacheResource(resource, name: string) {
        window.localStorage.setItem(name, resource)
    }

    public getResource(name: string) {
        return window.localStorage.getItem(name);
    }

    public stringify(data) {
        return JSON.stringify(data);
    }

}