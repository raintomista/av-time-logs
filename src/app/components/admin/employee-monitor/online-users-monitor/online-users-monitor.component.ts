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
      if(users.data.length > 0){
        users.data.sort((a, b) =>{
          return this.compareStrings(a.name, b.name);
        })
      }
      
      this.onlineUsers = users.data;
      this.loading = false;
    });  
  }

  ngOnInit() {
  }

  compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }


}
