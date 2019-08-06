import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Post } from './posts.model';

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

}
