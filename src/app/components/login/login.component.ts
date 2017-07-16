import { AlertService } from './../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, AlertService],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }
  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
         response => {
            let user = response.data.user;

            if(!user.isAdmin){
               console.log("Welcome User!");
               this.router.navigate(['/']);
            }
            else{
               console.log("Hello Admin!");
               this.router.navigate(['/admin']);
            }
            this.loading = false;
            this.storeSession(response.data);
         },
         err => {
            this.alertService.error(err.json().message);
            this.loading = false;
         }
      );
  }
  private storeSession(data){
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    localStorage.setItem('x-access-token', data.token);
  }
}
