import { Timelog } from './../../../../models/timelog';
import { TimelogService } from './../../../../services/timelog.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {INgxMyDpOptions} from 'ngx-mydatepicker';

@Component({
  selector: 'my-timelogs-table',
  templateUrl: './my-timelogs-table.component.html',
  styleUrls: ['./my-timelogs-table.component.css'],
  providers: [TimelogService, DatePipe]
})
export class MyTimelogsTableComponent implements OnInit {

  private param: any;
  private myOptions: INgxMyDpOptions = {
      dateFormat: 'mm/dd/yyyy',
  };

  private endDateOptions: INgxMyDpOptions = {
      dateFormat: 'mm/dd/yyyy',
  };
  dateRange: FormGroup;
  timelogs: Timelog[];
  

  constructor(private timelogService: TimelogService, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.param = JSON.parse(window.localStorage.getItem('currentUser')).username;
  }

  ngOnInit() {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();

    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0); 


    this.dateRange = new FormGroup({
      startDate: new FormControl({date: {year: y, month: m+1, day: firstDay.getDate()}}),
      endDate: new FormControl({date: {year: y, month: m+1, day: lastDay.getDate()}})
    });

    this.timelogService.getTimelogsByDateRange(this.param, this.datePipe.transform(firstDay, 'MMddyyyy'), this.datePipe.transform(lastDay, 'MMddyyyy')).subscribe(timelogs =>{
      this.timelogs = timelogs.data;
    });  

    this.dateRange.valueChanges.subscribe(form => {
      // console.log(form.startDate.date);
      this.timelogService.getTimelogsByDateRange(this.param, this.formatDate(form.startDate.date), this.formatDate(form.endDate.date)).subscribe(timelogs => {
        this.timelogs = timelogs.data;
      });
    });
  }

  transformDate(date) {
    this.datePipe.transform(date, 'MMddyyyy');
  }

  setDate(): void {
      // Set today date using the setValue function
      let date = new Date();
      this.dateRange.setValue({startDate: {
      date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()}
      }});
  }

  clearDate(): void {
        // Clear the date using the setValue function
        this.dateRange.setValue({startDate: null});
    }


  formatDate(date){
    return  `${this.padValue(date.month)}${this.padValue(date.day)}${date.year}`
  }

  padValue(value){
    if(value < 10){
      return '0' + value;
    }
    return value;
  }

}
