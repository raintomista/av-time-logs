import { Component, OnInit } from '@angular/core';
import { TimelogService } from '../../services/timelog.service';


@Component({
  selector: 'app-timelogs',
  templateUrl: './timelogs.component.html',
  styleUrls: ['./timelogs.component.css'],
  providers: [TimelogService]

})
export class TimelogsComponent implements OnInit {
  timelog: Object[];
  constructor(private timelogService: TimelogService) { 
    this.timelogService.getTimelogs().subscribe(timelogs =>{
      this.timelog = timelogs;
    });  
  }

  ngOnInit() {
  }

}

