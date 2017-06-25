import { TimelogService } from './../../../services/timelog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-out',
  templateUrl: './time-out.component.html',
  styleUrls: ['./time-out.component.css'],
  providers: [TimelogService]
})
export class TimeOutComponent implements OnInit {

  constructor(private timelogService: TimelogService) { }

  ngOnInit() {
  }

  timeOut(){
    if(confirm('Are you sure you want to time out?') == true){
      let user = JSON.parse(window.localStorage.getItem('currentUser'));
      this.timelogService.timeOut(user.username).subscribe();
      alert('Successfully timed out');  
      user.status = 0;
      window.localStorage.setItem('currentUser', JSON.stringify(user));
    }
    else{
      alert('You pressed cancel!');
    }
  }

}
