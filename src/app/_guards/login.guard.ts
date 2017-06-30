import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class LoginGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = localStorage.getItem('currentUser');
        if(user === null){
            return true;
        }
        else{
            console.log(user);
            if(JSON.parse(user).hasOwnProperty('isAdmin') === true){
                this.router.navigate(['/admin']);
            }
            else{
                this.router.navigate(['/']);
            }
            return false;
        }
        
        // not logged in so redirect to login page with the return url

        
        
        
    }
}