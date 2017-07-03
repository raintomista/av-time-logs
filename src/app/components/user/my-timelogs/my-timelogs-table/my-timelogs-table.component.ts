import { Timelog } from './../../../../models/timelog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-timelogs-table',
  templateUrl: './my-timelogs-table.component.html',
  styleUrls: ['./my-timelogs-table.component.css'],
})
export class MyTimelogsTableComponent implements OnInit {
  private param: any;
  timelogs: Timelog[] = [];
  total;  

  constructor() {
   }

  ngOnInit() {
  }
}