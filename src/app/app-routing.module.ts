import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostComponent},
  { path: 'add-post', component: AddPostComponent },
  { path: 'posts/:id/comments', component: CommentsComponent},
  { path: 'users', component: UsersComponent },
  { path: 'albums', component: AlbumsComponent },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
