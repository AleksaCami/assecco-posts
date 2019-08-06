import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Comment } from '../../services/comments/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public id: [];
  public comments = [];

  constructor(public http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getComments();
  }

  getAllPosts(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
      .pipe(
        retry(5)
      );
  }

  getComments() {
    this.getAllPosts().subscribe(results => {
      if (!results) {
        return;
      }
      this.comments = results;
      console.log(this.comments);
    });
  }

}
