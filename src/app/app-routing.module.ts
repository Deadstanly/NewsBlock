import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NewsComponent} from "./news/news.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {FavoritesNewsComponent} from "./news/favorites-news/favorites-news.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'news',
      component: NewsComponent
    },
    {
      path: 'favorites-news',
      component: FavoritesNewsComponent
    }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


