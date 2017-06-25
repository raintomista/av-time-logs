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
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
        console.log(this.returnUrl);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error("Invalid username/password.");
        this.loading = false; 
      }
      
    );
  }

}
