import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../models/userInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public user: UserInfo;

  constructor( private router: Router) {}

  ngOnInit(): void {
    this.user = UserInfo.getInstance();
  }

  public logOut():void {
    this.user.exit();
    this.router.navigateByUrl('login').then();
    localStorage.clear();
  }

}
