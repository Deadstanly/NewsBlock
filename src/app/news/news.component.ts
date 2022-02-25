import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsService} from "../services/news.service";
import {INews} from "../models/news";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {shareReplay} from "rxjs";
import {AddNewsComponent} from "./add-news/add-news.component";
import {UpdateNewsComponent} from "./update-news/update-news.component";
import {IUser} from "../models/user";
import {UserInfo} from "../models/userInfo";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  displayedColumns: string[] = ['idNumber', 'title', 'link', 'country', 'btnDelete', 'btnUpdate', `btnFavorites`];
  dataSource:  MatTableDataSource<INews>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private newsService: NewsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  public fetchNews() {
      this.newsService.getAllNews()
        .pipe(shareReplay(1))
        .subscribe(data => {
         this.dataSource = new MatTableDataSource<INews>(data);
         this.dataSource.paginator = this.paginator;
        })
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(AddNewsComponent, {
      width: '400px', height: '470px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchNews();
    });
  }

  deleteNewsPost(news:INews) {
    this.newsService.deleteNews(news).subscribe();
    this.fetchNews()
  }

  editPost(news: INews){
    const updatePost = this.dialog.open(UpdateNewsComponent, {
     width: '400px', height: '400px',
     data: {id: news.id, title: news.title, country: news.country, link: news.link},
   });

    updatePost.afterClosed().subscribe(result => {
      this.fetchNews()
    });
  }

  addToFavorites(news: INews) {
      const emailUser = UserInfo.getInstance();
      const userFavoritesData = {
        newsId: news.id,
        email: emailUser.email
      }
      this.newsService.addNewsToFavorites(userFavoritesData).subscribe();
  }

}
