import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: AdminDashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
