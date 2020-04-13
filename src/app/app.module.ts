import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './Posts/posts-list.component';
import { CommonModule } from '@angular/common';
import { StarComponent } from './Stars/star.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './Posts/post-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { PostDetailsGuard } from './Posts/post-details.guard';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    StarComponent,
    PostDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component: PostsListComponent},
      {path: 'posts/:id', 
        canActivate: [PostDetailsGuard],
        component: PostDetailsComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      //{path: '**', redirectTo: 'welcome', pathMatch: 'full'} // This path casually is being used for error sites.
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
