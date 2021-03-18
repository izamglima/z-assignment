import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().then((json) => this.posts = json);
  }

}
