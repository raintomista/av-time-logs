import { UserService } from './../../../../services/user.service';
import { ResourceService } from './../../../../services/resource.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnonymousSubscription } from "rxjs/Subscription";


@Component({
  selector: 'online-users-monitor',
  templateUrl: './online-users-monitor.component.html',
  styleUrls: ['./online-users-monitor.component.css'],
  providers: [UserService]
})
export class OnlineUsersMonitorComponent implements OnInit {
  private onlineUsers: Object[] = [];
  private loading: Boolean;
  private timerSubscription: AnonymousSubscription;

  constructor(private userService: UserService, private resource: ResourceService) {
     this.loading = true;
     this.fetchData();
  }

  ngOnInit() {
  }


  private fetchData() {
     this.userService.getOnlineUsers().subscribe(response => {
        if (response.data.length > 0) {
           response.data.sort((a, b) => {
              return this.compareStrings(a.lastName, b.lastName);
           })
        }

        this.onlineUsers = response.data;
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
