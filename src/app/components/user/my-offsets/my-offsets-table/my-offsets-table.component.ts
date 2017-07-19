import { OffsetService } from './../../../../services/offset.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'my-offsets-table',
   templateUrl: './my-offsets-table.component.html',
   styleUrls: ['./my-offsets-table.component.css']
})
export class MyOffsetsTableComponent implements OnInit {
   private offsets: any[] = [];
   private total: any;
   private user: any;
   private loading = true;
   constructor(private offsetService: OffsetService) { }

   ngOnInit() { }

   public setTotal(total: string) {
      this.total = total;
   }
   public setOffsets(offsets: any) {
      this.offsets = offsets;
   }

   public setUser(user) {
      this.user = user;
      this.loading = false;
   }

   public setValid(offsetId) {
      if (confirm('Are you sure you want to set this to valid?')) {
         this.offsetService.setOffsetValid(offsetId)
            .subscribe(response => {
               this.update(this.user.username).then((response: any) => {
                  this.total = response.data.totalValidOffsetHrs;
                  this.offsets = response.data.offsets;
                  alert('Successfully set to valid.');
               });
            });
      } else {
         alert('You pressed cancel!');

      }
   }

   public setInvalid(offsetId) {
      if (confirm('Are you sure you want to set this to valid?')) {
         this.offsetService.setOffsetInvalid(offsetId)
            .subscribe(response => {
               this.update(this.user.username).then((response: any) => {
                  this.total = response.data.totalValidOffsetHrs;
                  this.offsets = response.data.offsets;
                  alert('Successfully set to invalid.');
               });
            });

      } else {
         alert('You pressed cancel!');

      }
   }

   public update(username) {
      return new Promise((resolve, reject) => {
         this.offsetService.getUserOffsets(username).subscribe(response => {
            resolve(response);
         });
      });
   }

   public updateRemarks(event, offsetId) {
      const data = {
         _id: offsetId,
         remarks: event.target.value
      }

      this.offsetService.setRemarks(data)
         .subscribe(response => {
            this.update(this.user.username).then((response: any) => {
               this.offsets = response.data.offsets;
               alert('Successfully set remarks.');
            });
         });
   }

}
