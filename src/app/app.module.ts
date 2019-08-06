// MODULI
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// KOMPONENTE
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';

// SERVISI
import { PostsService } from './services/posts/posts.service';
import { UsersService } from './services/users/users.service';
import { EditPostComponent } from './components/edit-post/edit-post.component';

// MISC
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AddPostComponent,
    UsersComponent,
    AlbumsComponent,
    AlbumComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    PostsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faTrash);
  }
}
