import { Injectable } from '@angular/core';
import { StateService } from '../shared/state.service';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: []
};

@Injectable({
  providedIn: 'root'
})
export class PostStateService extends StateService<PostState> {
  allPosts$: Observable<Post[]> = this.select((state) => {return state.posts});

  constructor(private postService: PostService) {
    super(initialState);

    this.load();
  }

  load() {
    this.postService.getPosts().subscribe((posts) => this.setState({ posts }));
  }
}
