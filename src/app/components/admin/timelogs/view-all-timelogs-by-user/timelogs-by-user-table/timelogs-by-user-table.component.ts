import { User } from './../../../../../models/user';
import { Timelog } from './../../../../../models/timelog';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TimelogService } from './../../../../../services/timelog.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {INgxMyDpOptions} from 'ngx-mydatepicker';

@Component({
  selector: 'timelogs-by-user-table',
  templateUrl: './timelogs-by-user-table.component.html',
  styleUrls: ['./timelogs-by-user-table.component.css'],
  providers: [TimelogService, DatePipe]
})
export class TimelogsByUserTableComponent implements OnInit {
  private param: any;
  timelogs: Timelog[];
  user: User; 
  

  constructor(private timelogService: TimelogService, private route: ActivatedRoute, private datePipe: DatePipe) {
   }

  ngOnInit() {
  }
}
