import { ResourceService } from './../../../services/resource.service';
import { OffsetService } from './../../../services/offset.service';
import { OffsetMonitorTableComponent } from './offset-monitor-table/offset-monitor-table.component';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
   selector: 'offset-monitor',
   templateUrl: './offset-monitor.component.html',
   styleUrls: ['./offset-monitor.component.css'],
   providers: [OffsetService, ResourceService]
})
export class OffsetMonitorComponent implements OnInit {
   @ViewChild(OffsetMonitorTableComponent) table: OffsetMonitorTableComponent;


   constructor(private offsetService: OffsetService,
      private resourceService: ResourceService) {
      this.offsetService.getOffsets()
         .subscribe(response => {
            if (response.data.length > 0) {
               response.data.sort((a, b) => this.resourceService.compareStrings(a.lastName, b.lastName));
            }
            this.table.setUsers(response.data);
         });
   }

   ngOnInit() { }


}
