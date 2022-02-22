import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INews} from "../models/news";
import {environment} from "../../environments/environment";


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

}
