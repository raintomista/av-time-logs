import { UserService } from './../../../../services/user.service';
import { ResourceService } from './../../../../services/resource.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'online-users-monitor',
  templateUrl: './online-users-monitor.component.html',
  styleUrls: ['./online-users-monitor.component.css'],
  providers: [UserService]
})
export class OnlineUsersMonitorComponent implements OnInit {
  private onlineUsers: Object[];
  private loading: Boolean;
  constructor(private userService: UserService, private resource: ResourceService) { 
    this.loading = true;
    this.userService.getOnlineUsers().subscribe(users =>{
      this.onlineUsers = users.data;
      this.loading = false;
    });  
  }

  ngOnInit() {
  }

}
