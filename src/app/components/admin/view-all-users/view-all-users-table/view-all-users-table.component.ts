import { ResourceService } from './../../../../services/resource.service';
import { TimelogService } from './../../../../services/timelog.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'view-all-users-table',
  templateUrl: './view-all-users-table.component.html',
  styleUrls: ['./view-all-users-table.component.css'],
  providers: [UserService, TimelogService, ResourceService]

})
export class ViewAllUsersTableComponent implements OnInit {
  private users: Object[];
  private loading: Boolean;

  constructor(private userService: UserService, private router: Router, private timelogService: TimelogService, private resourceService: ResourceService) {
    this.loading = true;
    this.userService.getUsers().subscribe(users =>{
      if(users.data.length > 0){
        users.data.sort((a, b) =>{
          return this.resourceService.compareStrings(a.lastName, b.lastName);
        })
      }
      this.users = users.data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  suspend(user){
    if (confirm(`Do you want to suspend ${user.firstName} ${user.lastName}`) == true) {
      this.userService.suspendUser(user.username).subscribe(users =>{
         if(!user._timelog){
            alert(`Successfully suspended ${user.firstName} ${user.lastName}`);
            user.isSuspended = true;
         }
         else{
            if(user._timelog.timeOut === null){
               this.timelogService.timeOut(user.username).subscribe(response =>{
                  console.log(response);
                  alert(`Successfully suspended ${user.firstName} ${user.lastName} and timed out current session.`);
                  user.isSuspended = true;
               });
            }
            else if(user._offset.timeOut === null){
               this.timelogService.timeOut(user.username).subscribe(response =>{
                  console.log(response);
                  alert(`Successfully suspended ${user.firstName} ${user.lastName} and timed out current offset session.`);
                  user.isSuspended = true;
               });
            }
            else if(user._offset.timeOut !== null || user._timelog.timeOut !== null){
               alert(`Successfully suspended ${user.firstName} ${user.lastName}.`);
               user.isSuspended = true;
            }
         }
      });
    }
    else {
      alert('You pressed cancel');
    }
  }

  unsuspend(user){
    if (confirm(`Do you want to unsuspend ${user.firstName} ${user.lastName}`) == true) {
      this.userService.unsuspendUser(user.username).subscribe(users =>{
        alert(`Successfully unsuspended ${user.firstName} ${user.lastName}`);
        user.isSuspended = false;
      });
    }
    else {
      alert('You pressed cancel');
    }
  }



}
