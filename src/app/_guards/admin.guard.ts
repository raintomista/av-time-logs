import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = localStorage.getItem('currentUser');
        if (JSON.parse(user).isAdmin === true) {
            // logged in so return true
            return true;
        }

        this.router.navigate(['/']);
        alert('403 Unauthorized');
        return false;
    }
}
