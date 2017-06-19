import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'employee-monitor',
  templateUrl: './employee-monitor.component.html',
  styleUrls: ['./employee-monitor.component.css'],
  providers: [UserService]

})
export class EmployeeMonitorComponent implements OnInit {
  users: Object[];

  constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe(users =>{
      this.users = users.data;
    });  
  }

  ngOnInit() {
    
  }

}
