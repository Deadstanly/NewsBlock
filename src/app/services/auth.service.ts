import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {environment} from "../../environments/environment";
import {IAuth} from "../models/auth";
import {IUser} from "../models/user";
import {IRegistration} from "../models/registration";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: IUser): Observable<IAuth> {
    return this.http.post<IAuth>(`${environment.localDBUrl}/auth/login`, user)
  }

  public registration(user: IRegistration): Observable<IRegistration> {
    return this.http.post<IRegistration>(`https://my-nestjs-news-portal.herokuapp.com/auth/registration`,user)
  }

}






