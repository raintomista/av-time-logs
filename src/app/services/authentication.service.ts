import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { appConfig } from './../app.config';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthenticationService {
   constructor(private http: Http, private router: Router) { }

   login(username: string, password: string) {
      return this.http.post(`${appConfig.apiURL}/user/login`, {
         data: {
            username: username,
            password: password
         }
      })
         .map((response: Response) => {
            return response.json();
         });
   }

   logout() {
      this.router.navigate(['/login']);
      localStorage.clear();
   }

}
