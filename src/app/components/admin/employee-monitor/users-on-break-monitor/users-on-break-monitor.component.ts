import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Observable } from 'rxjs';
import { AnonymousSubscription } from "rxjs/Subscription";

@Component({
   selector: 'users-on-break-monitor',
   templateUrl: './users-on-break-monitor.component.html',
   styleUrls: ['./users-on-break-monitor.component.css'],
   providers: [UserService]
})
export class UsersOnBreakMonitorComponent implements OnInit {
   private usersOnBreak: Object[] = [];
   private loading: Boolean;
   private timerSubscription: AnonymousSubscription;

   constructor(private userService: UserService) {
      this.loading = true;
      this.fetchData();
   }

   ngOnInit() {
   }

   fetchData() {
      this.userService.getUsersOnBreak().subscribe(response => {
         if (response.data.length > 0) {
            response.data.sort((a, b) => {
               return this.compareStrings(a.lastName, b.lastName);
            })
         }
         this.usersOnBreak = response.data;
         this.loading = false;
         this.subscribeToData();
      });
   }

   private subscribeToData(): void {
      this.timerSubscription = Observable.timer(1000).first().subscribe(() => this.fetchData());
   }

   compareStrings(a, b) {
      // Assuming you want case-insensitive comparison
      a = a.toLowerCase();
      b = b.toLowerCase();
      return (a < b) ? -1 : (a > b) ? 1 : 0;
   }
}
