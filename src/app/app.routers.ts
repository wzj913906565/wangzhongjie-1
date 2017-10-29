import {RouterModule} from '@angular/router';
//首页
// import { HomeComponent } from './home/home.component';

export const appRouters = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // component: HomeComponent
    loadChildren: './home/home.module#HomeModule'
  }
];
