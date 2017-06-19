import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
  providers: [UserService]
})
export class ViewUserComponent implements OnInit {
  // users = [{
  //   username: 'rainier.tomista',
  //   password: 'jifiwjfiej',
  //   name: 'Rain Tomista',
  //   email: 'rstomista@up.edu.ph',
  //   contactNumber: '09959786692',
  //   timeLogs: null,
  //   logged: true,
  //   totalHours: 1332
  // }];	
  users: Object[];

  constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe(users =>{
      this.users = users.data;
      // console.log(this.users);
    });  
  }

  ngOnInit() {
  }
}