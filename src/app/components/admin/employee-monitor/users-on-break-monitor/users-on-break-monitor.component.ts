import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'users-on-break-monitor',
  templateUrl: './users-on-break-monitor.component.html',
  styleUrls: ['./users-on-break-monitor.component.css'],
  providers: [UserService]
})
export class UsersOnBreakMonitorComponent implements OnInit {
  private usersOnBreak: Object[];
  private loading: Boolean;

  constructor(private userService: UserService) { 
    this.loading = true;
    this.userService.getUsersOnBreak().subscribe(users =>{
      this.usersOnBreak = users.data;
      this.loading = false;
    });  
  }

  ngOnInit() {
  }

}
