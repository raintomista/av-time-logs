import { Timelog } from './../../../../models/timelog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-timelogs-table',
  templateUrl: './my-timelogs-table.component.html',
  styleUrls: ['./my-timelogs-table.component.css'],
})
export class MyTimelogsTableComponent{
  private param: any;
  private timelogs: Timelog[] = [];
  private loading: Boolean;
  private total;  

  constructor() {
    this.loading = true;
  }

  getParam(){
    return this.param;
  }
  setParam(param:any){
    this.param = param;
  }

  getTimelogs(){
    return this.timelogs;
  }

  setTimelogs(timelogs:Timelog[]){
    this.timelogs = timelogs;
  }

  getLoading(){
    return this.loading;
  }

  setLoading(bool: Boolean){
    this.loading = bool;
  }

  getTotal(){
    return this.total;
  }

  setTotal(total:any){
    this.total = total;
  }

}