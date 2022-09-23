import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { AdminDashboardComponent } from 'src/app/modules/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    DefaultComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DefaultModule { }
