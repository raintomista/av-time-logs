import { TimelogService } from './../../../services/timelog.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'time-in',
   templateUrl: './time-in.component.html',
   styleUrls: ['./time-in.component.css'],
   providers: [TimelogService]
})
export class TimeInComponent implements OnInit {
   disabled: Boolean = false;
   constructor(private timelogService: TimelogService) { }

   ngOnInit() {
   }

   timeIn() {
      this.disabled = true;
      let user = JSON.parse(window.localStorage.getItem('currentUser'));
      this.timelogService.timeIn(user.username).subscribe((response: any) => {
         alert(response.message);
         user.status = 1;
         window.localStorage.setItem('currentUser', JSON.stringify(user));
         this.disabled = false;
      });
   }

}
