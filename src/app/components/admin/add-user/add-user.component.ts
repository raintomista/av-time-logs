import { ResourceService } from './../../../services/resource.service';
import { UserService } from './../../../services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService, ResourceService]
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  usernameLabel: string;  
  fullNameLabel: string;
  emailLabel: string;
  passwordLabel: string;
  uploadParams: FormData;
  image: string = 'https://semantic-ui.com/images/wireframe/square-image.png';
  
  

  constructor(private userService: UserService, private resourceService: ResourceService) {
  }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.pattern("[^ @]*@[^ @]*"),
        Validators.required,
      ]),
      contactNumber: new FormControl(),
      totalHours: new FormControl(),
      status: new FormControl(),
      imgUrl: new FormControl(),
      _timelog: new FormControl()
    });

    this.fullNameLabel = 'Full Name';
    this.emailLabel = 'Email Address';
    this.usernameLabel = 'Username';
    this.passwordLabel = 'Password';
    
    
    
    
    this.addUserForm.valueChanges.subscribe(form =>{
      // Username Label
      if(this.addUserForm.controls.username.valid || !this.addUserForm.controls.username.dirty){
        this.usernameLabel = 'Username';
      }else if(this.addUserForm.controls.username.dirty && this.addUserForm.controls.username.errors.required){
        this.usernameLabel = 'Username is required'
      }

      if(this.addUserForm.controls.password.valid || !this.addUserForm.controls.password.dirty){
        this.passwordLabel = 'Password';
      }else if(this.addUserForm.controls.password.errors){
        this.passwordLabel = 'Password must be 8 characters long'
      }

      // Full Name Label
      if(this.addUserForm.controls.name.valid || !this.addUserForm.controls.name.dirty){
        this.fullNameLabel = 'Full Name';
      }else if(this.addUserForm.controls.name.dirty && this.addUserForm.controls.name.errors.required){
        this.fullNameLabel = 'Full Name is required'
      }

      // Email Label
      if(this.addUserForm.controls.email.valid || !this.addUserForm.controls.email.dirty){
        this.emailLabel = 'Email Address';
      }else if(this.addUserForm.controls.email.dirty && this.addUserForm.controls.email.errors.required){
        this.emailLabel = 'Email Address is required';
      }else if(this.addUserForm.controls.email.dirty && this.addUserForm.controls.email.errors.pattern){
        this.emailLabel = 'Invalid Email Address';
      }
    });
  }

  addUser(){
    if(this.addUserForm.valid){
      // this.resourceService.upload(this.uploadParams).subscribe(result => {
        // this.addUserForm.controls.imgUrl.setValue(result.secure_url);
        this.userService.addUser(this.addUserForm.value).subscribe(
          data => {
            alert('Sucessfully Created User');
            this.addUserForm.reset();
          },
          error => {
            alert('Error!');        
          }
        );
      // });
    }
  }

  fileEvent(fileInput: any){    
    this.uploadParams = this.createUploadParams(fileInput);

    this.resourceService.upload(this.uploadParams).subscribe(result => {
      this.image = result.secure_url;
      this.addUserForm.controls.imgUrl.setValue(this.image);
    });
  }

  private createUploadParams(fileInput) {
    let formData: FormData = new FormData();
    formData.append('upload_preset', 'bctvdem9');
    formData.append('file', fileInput.target.files[0]);
    return formData;
  }

}
