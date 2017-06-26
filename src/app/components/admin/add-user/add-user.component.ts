import { UserService } from './../../../services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  // model = {
  //   username: null,
  //   password: null,
  //   name: null,
  //   email: null,
  //   contactNumber: null,
  //   totalHours: null,
  //   status: 0,
  //   imgUrl: null,
  //   _timelog: null
  // };

  constructor(private userService: UserService) {}

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
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      contactNumber: new FormControl(),
      totalHours: new FormControl(),
      status: new FormControl(),
      imgUrl: new FormControl(),
      _timelog: new FormControl()
    });
  }

  addUser(){
    console.log(this.addUserForm.value);
    if(this.addUserForm.valid){
      this.userService.addUser(this.addUserForm.value).subscribe(
        data => {
          alert('Sucessfully Created User');
          this.addUserForm.reset();
        },
        error => {
          alert('Error!');        
        }
      );
    }
  }
}
