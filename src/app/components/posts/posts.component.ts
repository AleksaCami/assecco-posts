import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  public allPosts = [];

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAllPosts().subscribe(results => {
      if (!results) {
        return;
      }
      this.allPosts = results;
    });
  }

  deleteSelected(postId: number) {
    console.log(postId);
    this.postsService.deletePost(postId).subscribe(() => {
      alert('Successfully deleted item');
    });
  }

}
