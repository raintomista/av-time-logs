import { DatePipe } from '@angular/common';
import { TimelogService } from './../../../../services/timelog.service';
import { TimelogsByUserTableComponent } from './timelogs-by-user-table/timelogs-by-user-table.component';
import { ExportComponent } from './../../../export/export.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
const ALL_TIMELOGS_OF_USER: Number = 1;


@Component({
  selector: 'app-view-all-timelogs-by-user',
  templateUrl: './view-all-timelogs-by-user.component.html',
  styleUrls: ['./view-all-timelogs-by-user.component.css'],
  providers: [DatePipe, TimelogService]
})
export class ViewAllTimelogsByUserComponent{
  private param: any;
  @ViewChild(ExportComponent) exportBtn: ExportComponent;
  @ViewChild(TimelogsByUserTableComponent) table: TimelogsByUserTableComponent;
  

  constructor(private route: ActivatedRoute, private timelogService: TimelogService, private datePipe: DatePipe) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0); 

    this.route.params.subscribe(params => this.param = params['username']);

    this.timelogService.getTimelogsByDateRange(this.param, '06012017', '06302017').subscribe(timelogs =>{
      this.table.timelogs = timelogs.data;
      this.exportBtn.data = timelogs.data;
      this.exportBtn.user = timelogs.user;
      this.exportBtn.type = ALL_TIMELOGS_OF_USER;
    });  
  }
}
