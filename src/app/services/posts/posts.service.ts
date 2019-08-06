import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Post } from '../models/posts.model';
import { Comment } from '../../services/models/comment.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(public http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        retry(5)
      );
  }

  getPostData(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(
        retry(5)
      );
  }

  getPostComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .pipe(
      retry(5)
    );
  }

  deletePost(id: number): Observable<{}> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.delete(url, httpOptions);
  }

}
