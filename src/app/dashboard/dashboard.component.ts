import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../models/userInfo";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user: UserInfo;

  constructor() { }

  ngOnInit(): void {
    this.user = UserInfo.getInstance();
  }

  public logOut():void {
    this.user.exit();
  }


}
