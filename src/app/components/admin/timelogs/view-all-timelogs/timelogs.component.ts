import { TimelogsTableComponent } from './timelogs-table/timelogs-table.component';
import { ExportComponent } from './../../../export/export.component';
import { TimelogService } from './../../../../services/timelog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
const ALL_USERS_RECENT: Number = 0;

@Component({
   selector: 'admin-timelogs',
   templateUrl: './timelogs.component.html',
   styleUrls: ['./timelogs.component.css'],
   providers: [TimelogService]
})
export class TimelogsComponent implements OnInit {
   @ViewChild(ExportComponent) exportBtn: ExportComponent;
   @ViewChild(TimelogsTableComponent) table: TimelogsTableComponent;

   constructor(private timelogService: TimelogService) {
      this.timelogService.getTimelogs().subscribe(users => {
         this.table.setUsers(users.data);
         this.table.setLoading(false);
         this.exportBtn.data = users.data;
         this.exportBtn.type = ALL_USERS_RECENT;
      });
   }

   ngOnInit() {
   }
}
