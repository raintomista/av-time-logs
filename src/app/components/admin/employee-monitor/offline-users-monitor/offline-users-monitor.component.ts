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
      users.data.sort((a, b) =>{
        return this.compareStrings(a.name, b.name);
      })
      this.offlineUsers = users.data;
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
