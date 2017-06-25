import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-timelogs',
  templateUrl: './timelogs.component.html',
  styleUrls: ['./timelogs.component.css'],

})
export class TimelogsComponent implements OnInit {
  timelogs: Object[];

  constructor() {
    
  }

  ngOnInit() {
  }

}
