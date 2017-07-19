import { UserOffsetsTableComponent } from './user-offsets-table/user-offsets-table.component';
import { OffsetService } from './../../../services/offset.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
   selector: 'app-offset-monitor-by-user',
   templateUrl: './offset-monitor-by-user.component.html',
   styleUrls: ['./offset-monitor-by-user.component.css'],
   providers: [OffsetService]
})
export class OffsetMonitorByUserComponent implements OnInit {
   @ViewChild(UserOffsetsTableComponent) table: UserOffsetsTableComponent;
   private params: string;

   constructor(private route: ActivatedRoute,
      private offsetService: OffsetService) {
      this.route.params.subscribe(response => {
         this.params = response.username;
      });

      this.offsetService.getUserOffsets(this.params)
         .subscribe(response => {
            this.table.setTotal(response.data.totalValidOffsetHrs);
            this.table.setOffsets(response.data.offsets);
            this.table.setUser(response.data.user);
         });
   }

   ngOnInit() {
   }

}
