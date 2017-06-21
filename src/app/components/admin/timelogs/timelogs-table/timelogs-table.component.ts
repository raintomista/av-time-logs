import { Component, OnInit } from '@angular/core';
import { TimelogService } from '../../../../services/timelog.service';

@Component({
  selector: 'admin-timelogs-table',
  templateUrl: './timelogs-table.component.html',
  styleUrls: ['./timelogs-table.component.css'],
  providers: [TimelogService]

})
export class TimelogsTableComponent implements OnInit {
  timelogs: Object[];

  constructor(private timelogService: TimelogService) {
    this.timelogService.getTimelogs().subscribe(timelogs =>{
      this.timelogs = timelogs.data;
      
    });  
   }

  ngOnInit() {
  }


}
