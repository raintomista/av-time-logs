import { TimelogService } from './../../../services/timelog.service';
import { Component, OnInit } from '@angular/core';
TimelogService
@Component({
  selector: 'time-in',
  templateUrl: './time-in.component.html',
  styleUrls: ['./time-in.component.css'],
  providers: [TimelogService]
})
export class TimeInComponent implements OnInit {

  constructor(private timelogService: TimelogService) { }

  ngOnInit() {
  }

   timeIn(){
    let user = JSON.parse(window.localStorage.getItem('currentUser'));
    this.timelogService.timeIn(user.username).subscribe();
    alert("Successfully timed in");
  }

}
