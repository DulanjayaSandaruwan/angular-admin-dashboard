import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { AdminDashboardComponent } from 'src/app/modules/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {  } from '@angular/material' 

@NgModule({
  declarations: [
    DefaultComponent,
    AdminDashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class DefaultModule { }
