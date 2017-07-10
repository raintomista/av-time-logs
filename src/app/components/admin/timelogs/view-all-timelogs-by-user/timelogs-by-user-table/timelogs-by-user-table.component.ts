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
  private timelogs: Timelog[] = [];
  private loading: Boolean;
  private total;  

  constructor(private timelogService: TimelogService, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.loading = true;
  }

  ngOnInit() {
  }

  getParam(){
    return this.param;
  }
  setParam(param:any){
    this.param = param;
  }

  getTimelogs(){
    return this.timelogs;
  }

  setTimelogs(timelogs:Timelog[]){
    this.timelogs = timelogs;
  }

  getLoading(){
    return this.loading;
  }

  setLoading(bool: Boolean){
    this.loading = bool;
  }

  getTotal(){
    return this.total;
  }

  setTotal(total:any){
    this.total = total;
  }


}
