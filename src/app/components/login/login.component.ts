import { AlertService } from './../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, AlertService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  
  constructor(
    private authenticationService: AuthenticationService,
    private route: Router,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
        this.route.navigate(['']);
      },
      error => {
        this.alertService.error("Invalid username/password.");
        this.loading = false; 
      }
      
    );
  }

}
