import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-timelogs-by-user',
  templateUrl: './view-all-timelogs-by-user.component.html',
  styleUrls: ['./view-all-timelogs-by-user.component.css']
})
export class ViewAllTimelogsByUserComponent{
  private param: any;
  

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
       this.param = params['username']; 
    });
  }
}
