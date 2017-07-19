import { MyTimelogsTableComponent } from './my-timelogs-table/my-timelogs-table.component';
import { ExportComponent } from './../../export/export.component';
import { TimelogService } from './../../../services/timelog.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { FormGroup, FormControl } from '@angular/forms';

const ALL_TIMELOGS_OF_USER: Number = 1;


@Component({
   selector: 'app-my-timelogs',
   templateUrl: './my-timelogs.component.html',
   styleUrls: ['./my-timelogs.component.css'],
   providers: [DatePipe, TimelogService]
})
export class MyTimelogsComponent {
   private param: any;
   @ViewChild(ExportComponent) exportBtn: ExportComponent;
   @ViewChild(MyTimelogsTableComponent) table: MyTimelogsTableComponent;
   private myOptions: INgxMyDpOptions = {
      dateFormat: 'mm/dd/yyyy',
   };

   private endDateOptions: INgxMyDpOptions = {
      dateFormat: 'mm/dd/yyyy',
   };
   dateRange: FormGroup;

   constructor(private route: ActivatedRoute, private timelogService: TimelogService, private datePipe: DatePipe) {
      this.param = JSON.parse(window.localStorage.getItem('currentUser'));
      let date = new Date(), y = date.getFullYear(), m = date.getMonth();
      let firstDay = new Date(y, m, 1);
      let lastDay = new Date(y, m + 1, 0);

      this.dateRange = new FormGroup({
         startDate: new FormControl({ date: { year: y, month: m + 1, day: firstDay.getDate() } }),
         endDate: new FormControl({ date: { year: y, month: m + 1, day: lastDay.getDate() } })
      });

      this.timelogService.getTimelogsByDateRange(this.param.username, this.datePipe.transform(firstDay, 'MMddyyyy'), this.datePipe.transform(lastDay, 'MMddyyyy'))
         .subscribe(response => {
            this.table.setTimelogs(response.data.timelogs);
            this.table.setTotal(response.data.totalHrs);
            this.table.setLate(response.data.totalLateHrs);
            this.table.setLoading(false);
            // this.exportBtn.data = timelogs.data;
            // this.exportBtn.user = timelogs.user;
            // this.exportBtn.type = ALL_TIMELOGS_OF_USER;
         });

      this.dateRange.valueChanges.subscribe(form => {
         this.table.setLoading(true);
         this.table.setTimelogs([]);
         this.timelogService.getTimelogsByDateRange(this.param.username, this.formatDate(form.startDate.date), this.formatDate(form.endDate.date))
            .subscribe(response => {
               this.table.setTimelogs(response.data.timelogs);
               this.table.setTotal(response.data.totalHrs);
               this.table.setLate(response.data.totalLateHrs);
               this.table.setLoading(false);
            });
      });
   }

   getTotal(data) {
      let hours = 0, minutes = 0, seconds = 0;
      let hh = 0, mm = 0, ss = 0;
      data.forEach(timelog => {
         if (timelog.totalHrs !== null) {
            let temp = timelog.totalHrs.split(':');
            hours += parseInt(temp[0]);
            minutes += parseInt(temp[1]);
            seconds += parseInt(temp[2]);
         }
      });

      ss = seconds % 60;
      mm = (minutes % 60) + Math.floor(seconds / 60);
      hh = hours + Math.floor(minutes / 60);

      console.log(`${hours}:${minutes}:${seconds}`)
      console.log(`${hh}:${mm}:${ss}`)
      return `${this.padValue(hh)}:${this.padValue(mm)}:${this.padValue(ss)}`
   }

   formatDate(date) {
      return `${this.padValue(date.month)}${this.padValue(date.day)}${date.year}`
   }

   padValue(value) {
      if (value < 10) {
         return '0' + value;
      }
      return value;
   }
}
