import { Component, OnInit } from '@angular/core';
import { TimelogService } from '../../services/timelog.service';


@Component({
  selector: 'app-timelogs',
  templateUrl: './timelogs.component.html',
  styleUrls: ['./timelogs.component.css'],
  providers: [TimelogService]

})
export class TimelogsComponent implements OnInit {
  timelog: Timelog[];
  constructor(private timelogService: TimelogService) { 
    this.timelogService.getTimelogs().subscribe(timelogs =>{
      console.log(timelogs);
      console.log("tagina");
    });  
  }

  ngOnInit() {
  }

}

interface Timelog{
  id: string,
  username: string, 
  timeIn: Date,
  timeOut: Date
}
