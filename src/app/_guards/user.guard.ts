import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class UserGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = localStorage.getItem('currentUser');
        if (JSON.parse(user).hasOwnProperty('isAdmin') === false) {
            return true;
        }

        this.router.navigate(['/admin']);
        alert('403 Unauthorized');
        return false;
    }
}