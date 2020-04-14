import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { StarComponent } from '../Stars/star.component';
import { PostDetailsComponent } from './post-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostDetailsGuard } from './post-details.guard';



@NgModule({
  declarations: [
    PostsListComponent,
    StarComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'posts', component: PostsListComponent},
      {path: 'posts/:id', 
        canActivate: [PostDetailsGuard],
        component: PostDetailsComponent},
   ])
  ]
})
export class PostModule { }
