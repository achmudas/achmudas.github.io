import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { 
  }

  POSTS : Post[] = [
    {id: 1, type: "daily", title: "January 17 | Work", text: "aaamazing post with detailed text 1 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 2, type: "daily", title: "January 18 | Work", text: "aaamazing post with detailed text 2 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 3, type: "daily", title: "January 19 | Work", text: "aaamazing post with detailed text 3 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 4, type: "daily", title: "January 20 | Work", text: "aaamazing post with detailed text 4 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 5, type: "daily", title: "January 21 | Work", text: "aaamazing post with detailed text 5 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 6, type: "essay", title: "Essay 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 7, type: "essay", title: "Essay 2", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
    {id: 8, type: "daily", title: "January 22 | Work", text: "aaamazing post with detailed text 6 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
  ]

  getDailyUpdates() : Post[] {
    return this.POSTS.filter(post => post.type == "daily");
  }

  getEssays() : Post[] {
    return this.POSTS.filter(post => post.type == "essay");
  }

  getPost(id: number) : Observable<Post> {
    const post = this.POSTS.find(post => post.id === id)!;
    return of(post);
  } 
}
