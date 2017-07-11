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
      console.log(users);
      if(users.data.length > 0){
        users.data.sort((a, b) =>{
          return this.compareStrings(a.name, b.name);
        })
      }
      this.usersOnBreak = users.data;
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
