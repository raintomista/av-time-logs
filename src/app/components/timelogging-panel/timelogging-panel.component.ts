import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timelogging-panel',
  templateUrl: './timelogging-panel.component.html',
  styleUrls: ['./timelogging-panel.component.css']
})
export class TimeloggingPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkStatus(){
    let status = JSON.parse(window.localStorage.getItem('currentUser')).status;
    return status;
  }

}
