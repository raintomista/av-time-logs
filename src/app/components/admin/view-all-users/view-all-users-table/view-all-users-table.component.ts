import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'view-all-users-table',
  templateUrl: './view-all-users-table.component.html',
  styleUrls: ['./view-all-users-table.component.css'],
  providers: [UserService]

})
export class ViewAllUsersTableComponent implements OnInit {
  users: Object[];

  constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe(users =>{
      this.users = users.data;
      console.log(users.data);
    }); 
  }

  ngOnInit() {
  }

}
