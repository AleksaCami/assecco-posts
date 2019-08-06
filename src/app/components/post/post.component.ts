import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  public id: number;
  public postData = [];
  public postComments = [];

  constructor(public http: HttpClient, private route: ActivatedRoute, public postsService: PostsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getPost();
  }

  getPost() {
    this.postsService.getPostData(this.id).subscribe(results => {
      if (!results) {
        return;
      }
      this.postData = results;
    });
    this.getComments();
  }

  getComments() {
    this.postsService.getPostComments(this.id).subscribe(results => {
      if (!results) {
        return;
      }
      this.postComments = results;
    });
  }

}
