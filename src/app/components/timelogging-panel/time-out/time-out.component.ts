import { TimelogService } from './../../../services/timelog.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'time-out',
   templateUrl: './time-out.component.html',
   styleUrls: ['./time-out.component.css'],
   providers: [TimelogService]
})
export class TimeOutComponent implements OnInit {
   disabled: Boolean = false;
   constructor(private timelogService: TimelogService) { }

   ngOnInit() {
   }

   timeOut() {
      this.disabled = true;
      if (confirm('Are you sure you want to time out?') == true) {
         let user = JSON.parse(window.localStorage.getItem('currentUser'));
         this.timelogService.timeOut(user.username).subscribe((response: any) => {
            alert(response.message);
            user.status = 0;
            window.localStorage.setItem('currentUser', JSON.stringify(user));
            this.disabled = false;
         });

      }
      else {
         alert('You pressed cancel!');
         this.disabled = false;
      }
   }

}
