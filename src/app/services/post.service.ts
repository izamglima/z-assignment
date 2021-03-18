import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

  constructor() { }

  getPosts() {
    return fetch(this.API_ENDPOINT)
    .then((response) => response.json());
  }
}
