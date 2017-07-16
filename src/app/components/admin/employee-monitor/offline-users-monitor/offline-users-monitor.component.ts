import { Observable } from 'rxjs';
import { AnonymousSubscription } from "rxjs/Subscription";
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'offline-users-monitor',
  templateUrl: './offline-users-monitor.component.html',
  styleUrls: ['./offline-users-monitor.component.css'],
  providers: [UserService]
})
export class OfflineUsersMonitorComponent implements OnInit {
   private offlineUsers: Object[] = [];
   private loading: Boolean;
   private timerSubscription: AnonymousSubscription;

   constructor(private userService: UserService) {
      this.loading = true;
      this.fetchData();
   }

   ngOnInit() {
   }

   private fetchData() {
      this.userService.getOfflineUsers().subscribe(response => {
         if (response.data.length > 0) {
            response.data.sort((a, b) => {
               return this.compareStrings(a.lastName, b.lastName);
            })
         }
         this.offlineUsers = response.data;
         this.loading = false;
         this.subscribeToData();
      });
   }

   private subscribeToData(): void {
      this.timerSubscription = Observable.timer(1000).first().subscribe(() => this.fetchData());
   }
   private compareStrings(a, b) {
      // Assuming you want case-insensitive comparison
      a = a.toLowerCase();
      b = b.toLowerCase();
      return (a < b) ? -1 : (a > b) ? 1 : 0;
   }
}
