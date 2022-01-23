import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { 
  }

  DAILY_UPDATES : Post[] = [
    {id: 1, type: "daily", title: "January 17 | Work", text: "aaamazing post with detailed text 1 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 2, type: "daily", title: "January 18 | Work", text: "aaamazing post with detailed text 2 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 3, type: "daily", title: "January 19 | Work", text: "aaamazing post with detailed text 3 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 4, type: "daily", title: "January 20 | Work", text: "aaamazing post with detailed text 4 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 5, type: "daily", title: "January 21 | Work", text: "aaamazing post with detailed text 5 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    {id: 6, type: "daily", title: "January 22 | Work", text: "aaamazing post with detailed text 6 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
  ]

  getDailyUpdates() : Post[] {
    return this.DAILY_UPDATES;
  }

  getPost(id: number) : Observable<Post> {
    const post = this.DAILY_UPDATES.find(post => post.id === id)!;
    return of(post);
  } 
}
