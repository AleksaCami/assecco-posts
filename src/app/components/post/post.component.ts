import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Post } from '../../services/posts/posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public id: [];
  public postData = [];

  constructor(public http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getPost();
  }

  getPostData(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .pipe(
        retry(5)
      );
  }

  getPost() {
    this.getPostData().subscribe(results => {
      if (!results) {
        return;
      }
      this.postData = results;
    });
  }

}
