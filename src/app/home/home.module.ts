import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { homeRouter } from './home.routers'
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// 个人简介
import { AbstractComponent } from './abstract/abstract.component';
// 联系我
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouter),
    NgZorroAntdModule
  ],
  declarations: [
    HomeComponent,
    AbstractComponent,
    ContactComponent
  ]
})
export class HomeModule { }
