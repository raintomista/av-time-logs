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

  setUsers(users: Object[]){
    this.users = users;
  }


}
