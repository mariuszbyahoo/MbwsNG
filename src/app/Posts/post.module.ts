import { NgModule } from '@angular/core';
import { PostsListComponent } from './posts-list.component';
import { PostDetailsComponent } from './post-details.component';
import { RouterModule } from '@angular/router';
import { PostDetailsGuard } from './post-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsListComponent,
    PostDetailsComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'posts', component: PostsListComponent},
      {path: 'posts/:id', 
        canActivate: [PostDetailsGuard],
        component: PostDetailsComponent},
   ]),
    SharedModule
  ]
})
export class PostModule { }
