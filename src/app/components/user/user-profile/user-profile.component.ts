import { Router } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { UserService } from './../../../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  private currentUser: any;
  private accountDetailsForm: FormGroup;
  private accountDetailsFormLock: Boolean;
  private userDetailsForm: FormGroup;
  private allowEditing: Boolean;
  private imgUrl: String;
  
  
  constructor(private userService: UserService, private auth: AuthenticationService, private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.imgUrl = this.currentUser.imgUrl;
  }

  ngOnInit() {
    this.accountDetailsFormLock = true;
    this.accountDetailsForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required
      ]),
      imgUrl: new FormControl(null, []),
    });
    this.allowEditing = false;
    this.userDetailsForm = new FormGroup({
      name: new FormControl(this.currentUser.name, [
        Validators.required
      ]),
      email: new FormControl(this.currentUser.email, [
        Validators.pattern("[^ @]*@[^ @]*"),
        Validators.required,
      ]),
      contactNumber: new FormControl(this.currentUser.contactNumber, []),
    });
  }

  ngAfterViewChecked(){
    $('.upload.image')
      .dimmer({
        on: 'hover'
      });
  }

  private toggleAccountDetails(){
    this.accountDetailsFormLock = this.accountDetailsFormLock === true ? false : true;
  }

  private toggleFormEditing(){
    this.allowEditing = true;
  }

  private saveChanges(){
    let data:any = {};
    data.username = this.currentUser.username;
    data.name = this.userDetailsForm.controls.name.value;
    data.contactNumber = this.userDetailsForm.controls.contactNumber.value;
    data.email = this.userDetailsForm.controls.email.value;
    
    if(this.accountDetailsForm.controls.username.value !== ''){
      data.newUsername = this.accountDetailsForm.controls.username.value;
    }

    if(this.accountDetailsForm.controls.password.value !== ''){
      data.password = this.accountDetailsForm.controls.password.value;
    }

    if(typeof this.accountDetailsForm.controls.imgUrl !== 'undefined'){
      data.imgUrl = this.accountDetailsForm.controls.imgUrl.value;
    }

    this.userService.editUser(data).subscribe(response => {
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      this.allowEditing = false;      
      alert(response.message);
      window.location.reload();
    });

    
  }

  private getName(){
    return JSON.parse(localStorage.getItem('currentUser')).name;
  }

  private getUsername(){
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }

  private fileEvent(event: any){
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.accountDetailsForm.controls.imgUrl.setValue(reader.result);
      this.imgUrl = reader.result;
    }, false);
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
