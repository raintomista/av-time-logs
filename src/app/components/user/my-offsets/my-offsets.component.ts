import { ExportComponent } from './../../export/export.component';
import { MyOffsetsTableComponent } from './my-offsets-table/my-offsets-table.component';
import { OffsetService } from './../../../services/offset.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
   selector: 'app-my-offsets',
   templateUrl: './my-offsets.component.html',
   styleUrls: ['./my-offsets.component.css'],
   providers: [OffsetService]
})
export class MyOffsetsComponent implements OnInit {
   private param: any;
   @ViewChild(ExportComponent) exportBtn: ExportComponent;
   @ViewChild(MyOffsetsTableComponent) table: MyOffsetsTableComponent;

   constructor(private route: ActivatedRoute,
      private offsetService: OffsetService) {
      this.param = JSON.parse(window.localStorage.getItem('currentUser'));

      this.offsetService.getUserOffsets(this.param.username)
         .subscribe(response => {
            this.table.setTotal(response.data.totalValidOffsetHrs);
            this.table.setOffsets(response.data.offsets);
            this.table.setUser(response.data.user);
         });
   }

   ngOnInit() {
   }

}
