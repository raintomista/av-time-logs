import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css'],
  providers: [UserService]
})
export class ViewUserComponent implements OnInit {

  constructor(private userService: UserService) { 
   
  }

  ngOnInit() {
  }
}