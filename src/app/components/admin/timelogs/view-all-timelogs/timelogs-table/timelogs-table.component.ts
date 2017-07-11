import { Component, OnInit } from '@angular/core';
import { TimelogService } from '../../../../../services/timelog.service';

@Component({
  selector: 'admin-timelogs-table',
  templateUrl: './timelogs-table.component.html',
  styleUrls: ['./timelogs-table.component.css'],
  providers: [TimelogService]

})
export class TimelogsTableComponent implements OnInit {
  private users: Object[];
  private loading: Boolean;
  constructor(private timelogService: TimelogService) {
    this.loading = true;
  }

  ngOnInit() {
  }

  getLoading(){
    return this.loading;
  }
  setLoading(bool:Boolean){
    this.loading = bool;
  }

  getUsers(){
    return this.users;
  }

  setUsers(users: any[]){
    if(users.length > 0){
      users.sort((a, b) =>{
        return this.compareStrings(a.name, b.name);
      })
    }
    this.users = users;
  }

  compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }
}
