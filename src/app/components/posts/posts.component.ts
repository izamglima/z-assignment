import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../../models/post'
import { Observable } from 'rxjs/internal/Observable';
import { PostStateService } from '../../services/post-state.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  allPosts$: Observable<Post[]>;

  constructor(public postState: PostStateService) { }

  ngOnInit(): void {
    this.allPosts$ = this.postState.allPosts$;
  }

}
