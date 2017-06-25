import { ActivatedRoute } from '@angular/router';
import { TimelogService } from './../../../../../services/timelog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timelogs-by-user-table',
  templateUrl: './timelogs-by-user-table.component.html',
  styleUrls: ['./timelogs-by-user-table.component.css'],
  providers: [TimelogService]
})
export class TimelogsByUserTableComponent implements OnInit {
  private param: any;
  timelogs: Object[];
  

  constructor(private timelogService: TimelogService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
       this.param = params['username']; 

    });


    this.timelogService.getTimelogsByUser(this.param).subscribe(timelogs =>{
      this.timelogs = timelogs.data;
    });  
   }

  ngOnInit() {
  }

}
