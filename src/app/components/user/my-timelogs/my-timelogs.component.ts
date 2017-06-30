import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timelogs',
  templateUrl: './my-timelogs.component.html',
  styleUrls: ['./my-timelogs.component.css']
})
export class MyTimelogsComponent implements OnInit {
  private param: any;
  constructor() { 
    this.param = JSON.parse(window.localStorage.getItem('currentUser')).username;
  }

  ngOnInit() {
  }

}
