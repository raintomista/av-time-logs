import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AdminGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = localStorage.getItem('currentUser');
        // console.log(JSON.parse(user).hasOwnProperty('isAdmin') === false);
        if (JSON.parse(user).hasOwnProperty('isAdmin') === true) {
            // logged in so return true
            return true;
        }
        
        
        // not logged in so redirect to login page with the return url
        // 
        this.router.navigate(['']);
        alert('403 Unauthorized');
        return false;
    }
}