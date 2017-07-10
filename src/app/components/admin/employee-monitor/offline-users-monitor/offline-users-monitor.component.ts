import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';


@Component({
  selector: 'offline-users-monitor',
  templateUrl: './offline-users-monitor.component.html',
  styleUrls: ['./offline-users-monitor.component.css'],
  providers: [UserService]
})
export class OfflineUsersMonitorComponent implements OnInit {
  private offlineUsers: Object[];
  private loading: Boolean;

  constructor(private userService: UserService) {
    this.loading = true;
    this.userService.getOfflineUsers().subscribe(users =>{
      this.offlineUsers = users.data;
      this.loading = false;
    });  
   }

  ngOnInit() {
  }

}
