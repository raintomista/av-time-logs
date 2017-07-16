import { ResourceService } from './../../../../services/resource.service';
import { OffsetService } from './../../../../services/offset.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'offset-monitor-table',
  templateUrl: './offset-monitor-table.component.html',
  styleUrls: ['./offset-monitor-table.component.css'],
  providers: [OffsetService, ResourceService]
})
export class OffsetMonitorTableComponent implements OnInit {
  private users = [];
  private loading = true;
  constructor(private offsetService: OffsetService,
              private resourceService: ResourceService) { }

  ngOnInit() {
  }

  private setLoading(bool){
     this.loading = bool;
  }

  private getLoading(){
     return this.loading;
  }
  public getUsers(){
    return this.users;
  }

  public setUsers(users){
    this.users = users;
    this.loading = false;
  }

  public setValid(user){
    this.offsetService.setOffsetValid(user._offset._id)
      .subscribe(response => {
        this.update().then((response: any) => {
            if (response.data.length > 0){
               response.data.sort((a, b) => this.resourceService.compareStrings(a.lastName, b.lastName));
            }
            this.users = response.data;
            alert('Successfully set to valid.');
        });
      });
  }

  public setInvalid(user) {
     this.offsetService.setOffsetInvalid(user._offset._id)
        .subscribe(response => {
           this.update().then((response: any) => {
              if (response.data.length > 0){
               response.data.sort((a, b) => this.resourceService.compareStrings(a.lastName, b.lastName));
              }
              this.users = response.data;
              alert('Successfully set to invalid.');
           });
        });
  }


  public update(){
    return new Promise((resolve, reject ) => {
      this.offsetService.getOffsets().subscribe(response => {
        resolve(response);
      });
    });
  }

  public updateRemarks(event, user){
    let data = {
      _id: user._offset._id,
      remarks: event.target.value
    }

    this.offsetService.setRemarks(data)
      .subscribe(response => {
        this.update().then((response: any) => {
          this.users = response.data;
          alert('Successfully set remarks.');
        });
      });
  }
}
