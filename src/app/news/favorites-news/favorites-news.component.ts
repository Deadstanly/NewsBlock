import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {INews} from "../../models/news";
import {UserInfo} from "../../models/userInfo";

@Component({
  selector: 'app-favorites-news',
  templateUrl: './favorites-news.component.html',
  styleUrls: ['./favorites-news.component.scss']
})
export class FavoritesNewsComponent implements OnInit {

  public userNews: INews;

  constructor(private newsServices: NewsService) { }

  ngOnInit(): void {
    this.fetchFavoritesNews();
  }

  public fetchFavoritesNews() {
    const userEmail = UserInfo.getInstance();
    this.newsServices.getUserByEmail(userEmail.email).subscribe(
      data => this.userNews = data);
  }
}
