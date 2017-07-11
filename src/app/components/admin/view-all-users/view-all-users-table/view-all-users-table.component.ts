import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'view-all-users-table',
  templateUrl: './view-all-users-table.component.html',
  styleUrls: ['./view-all-users-table.component.css'],
  providers: [UserService]

})
export class ViewAllUsersTableComponent implements OnInit {
  private users: Object[];
  private loading: Boolean;

  constructor(private userService: UserService, private router: Router) { 
    this.loading = true;
    this.userService.getUsers().subscribe(users =>{
      if(users.data.length > 0){
        users.data.sort((a, b) =>{
          return this.compareStrings(a.name, b.name);
        })
      }
      this.users = users.data;
      this.loading = false;
    }); 
  }

  ngOnInit() {
  }

  suspend(user){
    if (confirm(`Do you want to suspend this ${user.name}`) == true) {
      this.userService.suspendUser(user.username).subscribe(users =>{
        alert(`Successfully suspended ${user.name}`);
        user.status = 3;
        
      }); 
    } 
    else {
      alert('You pressed cancel');      
    }
  }

  unsuspend(user){
    if (confirm(`Do you want to unsuspend this ${user.name}`) == true) {
      this.userService.unsuspendUser(user.username).subscribe(users =>{
        alert(`Successfully unsuspended ${user.name}`);
        user.status = 0;
      }); 
    } 
    else {
      alert('You pressed cancel');      
    }
  }

  compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }
  
}
