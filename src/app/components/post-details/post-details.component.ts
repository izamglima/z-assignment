import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;
  public isFlipped = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(isFlipped) {
    this.isFlipped = !isFlipped;
  }

}
