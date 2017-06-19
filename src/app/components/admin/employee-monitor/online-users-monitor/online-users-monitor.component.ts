import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';


@Component({
  selector: 'online-users-monitor',
  templateUrl: './online-users-monitor.component.html',
  styleUrls: ['./online-users-monitor.component.css']
})
export class OnlineUsersMonitorComponent implements OnInit {
  onlineUsers: Object[];

  constructor(private userService: UserService) { 
    this.userService.getOnlineUsers().subscribe(users =>{
      this.onlineUsers = users.data;
    });  
  }

  ngOnInit() {
  }

}
