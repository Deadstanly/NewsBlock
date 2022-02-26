import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {UserInfo} from "../../models/userInfo";
import {IUser} from "../../models/user";

@Component({
  selector: 'app-favorites-news',
  templateUrl: './favorites-news.component.html',
  styleUrls: ['./favorites-news.component.scss']
})
export class FavoritesNewsComponent implements OnInit {

  public userNews: IUser;

  constructor(private newsServices: NewsService) {
  }

  ngOnInit(): void {
    this.fetchFavoritesNews();
  }

  public fetchFavoritesNews() {
    const userEmail = UserInfo.getInstance();
    this.newsServices.getUserByEmail(userEmail.email).subscribe(
      data => this.userNews = data);
  }

  deleteFavoritesNews(id: number) {
    this.newsServices.deleteUserNews(id).subscribe({
      next: () => {
        this.fetchFavoritesNews();
      },
      error: () => {alert("Error")},
      complete: () => {{}}
    });
  }
}
