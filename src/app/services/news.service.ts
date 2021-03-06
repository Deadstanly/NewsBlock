import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INews} from "../models/news";
import {environment} from "../../environments/environment";
import {IUser} from "../models/user";


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  public getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${environment.localDBUrl}/news`);
  }

  public createNews(news: INews): Observable<void> {
    return this.http.post<void>(`${environment.localDBUrl}/news`, news);
  }

  public deleteNews(news: INews): Observable<void> {
    return this.http.delete<void>(`${environment.localDBUrl}/news/${news.id}`);
  }

  public editNews(id: number, news: INews): Observable<INews> {
    return this.http.put<INews>(`${environment.localDBUrl}/news/${id}`, news)
  }

  public addNewsToFavorites(userFavoritesData): Observable<void> {
    return this.http.post<void>(`${environment.localDBUrl}/users/addNewsToUser`, userFavoritesData)
  }

  public getUserByEmail(email: string): Observable<IUser> {
    return this.http.get<IUser>(`${environment.localDBUrl}/users/${email}`)
  }

  public deleteUserNews(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.localDBUrl}/users/deleteMyNew/${id}`)
  }



}
