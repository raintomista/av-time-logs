import { UserService } from './../../../../services/user.service';
import { DatePipe } from '@angular/common';
import { TimelogService } from './../../../../services/timelog.service';
import { TimelogsByUserTableComponent } from './timelogs-by-user-table/timelogs-by-user-table.component';
import { ExportComponent } from './../../../export/export.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {INgxMyDpOptions} from 'ngx-mydatepicker';
import { FormGroup, FormControl } from '@angular/forms';


const ALL_TIMELOGS_OF_USER: Number = 1;


@Component({
  selector: 'app-view-all-timelogs-by-user',
  templateUrl: './view-all-timelogs-by-user.component.html',
  styleUrls: ['./view-all-timelogs-by-user.component.css'],
  providers: [DatePipe, TimelogService, UserService]
})
export class ViewAllTimelogsByUserComponent{
  private param: any;
  private name: any;
  @ViewChild(ExportComponent) exportBtn: ExportComponent;
  @ViewChild(TimelogsByUserTableComponent) table: TimelogsByUserTableComponent;
  private myOptions: INgxMyDpOptions = {
      dateFormat: 'mm/dd/yyyy',
  };

  private endDateOptions: INgxMyDpOptions = {
      dateFormat: 'mm/dd/yyyy',
  };
  dateRange: FormGroup;

  constructor(private route: ActivatedRoute, private timelogService: TimelogService, private userService: UserService, private datePipe: DatePipe) {
    this.route.params.subscribe(params => {
      this.param = params['username']
      this.name = this.param;
    });

    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0); 

    this.dateRange = new FormGroup({
      startDate: new FormControl({date: {year: y, month: m+1, day: firstDay.getDate()}}),
      endDate: new FormControl({date: {year: y, month: m+1, day: lastDay.getDate()}})
    });

    this.userService.getUser(this.param).subscribe(user => {
      console.log(user.data);
      this.name = user.data[0].name;
    });

    this.timelogService.getTimelogsByDateRange(this.param, this.datePipe.transform(firstDay, 'MMddyyyy'), this.datePipe.transform(lastDay, 'MMddyyyy')).subscribe(timelogs =>{
      this.table.timelogs = timelogs.data;
      this.table.total = this.getTotal(timelogs.data);
      this.exportBtn.data = timelogs.data;
      this.exportBtn.user = timelogs.user;
      this.exportBtn.type = ALL_TIMELOGS_OF_USER;
      this.param
    }); 

    this.dateRange.valueChanges.subscribe(form => {
      this.timelogService.getTimelogsByDateRange(this.param, this.formatDate(form.startDate.date), this.formatDate(form.endDate.date)).subscribe(timelogs => {
        this.table.timelogs = timelogs.data;
        this.table.total = this.getTotal(timelogs.data);  
        this.exportBtn.data = timelogs.data;
        this.exportBtn.user = timelogs.user;
        this.exportBtn.type = ALL_TIMELOGS_OF_USER;
      });
    }); 
  }

  getTotal(data){
    let hours = 0, minutes = 0, seconds = 0;
    let hh=0, mm=0, ss=0;
    data.forEach(timelog =>{
      if(timelog.totalHrs !== null){
        let temp = timelog.totalHrs.split(':');
        hours+=parseInt(temp[0]);
        minutes+=parseInt(temp[1]);
        seconds+=parseInt(temp[2]);
      }
    });

    ss = seconds % 60;
    mm = (minutes % 60) + Math.floor(seconds/60);
    hh = hours + Math.floor(minutes/60);
    
    console.log(`${hours}:${minutes}:${seconds}`)
    console.log(`${hh}:${mm}:${ss}`)
    return `${this.padValue(hh)}:${this.padValue(mm)}:${this.padValue(ss)}`
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




