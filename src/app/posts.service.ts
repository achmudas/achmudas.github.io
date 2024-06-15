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
    {id: 1, type: "daily", title: "January 16th | Blog", src: "assets/dailies/16-01-2022.md"},
    {id: 2, type: "daily", title: "January 21st | Blog", src: "assets/dailies/21-01-2022.md"},
    {id: 3, type: "daily", title: "January 30th | Blog", src: "assets/dailies/30-01-2022.md"},
    {id: 4, type: "daily", title: "February 9th | Blog", src: "assets/dailies/09-02-2022.md"},
    {id: 5, type: "daily", title: "February 10th | Blog", src: "assets/dailies/10-02-2022.md"},
    {id: 6, type: "daily", title: "February 14th | Blog", src: "assets/dailies/14-02-2022.md"},
    {id: 7, type: "daily", title: "March 2nd | Blog", src: "assets/dailies/02-03-2022.md"},
    {id: 8, type: "daily", title: "March 3rd | Blog", src: "assets/dailies/03-03-2022.md"},
    {id: 9, type: "daily", title: "March 7th | Blog", src: "assets/dailies/07-03-2022.md"},
    {id: 10, type: "daily", title: "March 9th | Blog", src: "assets/dailies/09-03-2022.md"},
    {id: 11, type: "daily", title: "March 11th | Blog", src: "assets/dailies/11-03-2022.md"},
    {id: 12, type: "daily", title: "March 13th | Blog", src: "assets/dailies/13-03-2022.md"},
    {id: 13, type: "daily", title: "March 14th | Blog", src: "assets/dailies/14-03-2022.md"},
    {id: 14, type: "daily", title: "March 23rd | Blog", src: "assets/dailies/23-03-2022.md"},
    {id: 15, type: "daily", title: "March 24th | Blog", src: "assets/dailies/24-03-2022.md"},
    {id: 16, type: "daily", title: "March 25th | Beekeeping game", src: "assets/dailies/25-03-2022.md"},
    {id: 17, type: "daily", title: "April 4th | Blog", src: "assets/dailies/05-04-2022.md"},
    {id: 18, type: "daily", title: "May 9th | Blog", src: "assets/dailies/09-05-2022.md"},
    {id: 19, type: "daily", title: "May 12th | Blog", src: "assets/dailies/12-05-2022.md"},
    {id: 20, type: "daily", title: "May 24th | Blog", src: "assets/dailies/24-05-2022.md"},
    {id: 21, type: "daily", title: "May 25th | Blog", src: "assets/dailies/25-05-2022.md"},
    {id: 22, type: "daily", title: "May 31st | Blog", src: "assets/dailies/31-05-2022.md"},
    {id: 23, type: "daily", title: "June 2nd | Blog", src: "assets/dailies/02-06-2022.md"}
  ]

  getDailyUpdates() : Post[] {
    return this.POSTS.filter(post => post.type == "daily").reverse();
  }

  getEssays() : Post[] {
    return this.POSTS.filter(post => post.type == "essay").reverse();
  }

  getPost(id: number) : Observable<Post> {
    const post = this.POSTS.find(post => post.id === id)!;
    return of(post);
  } 
}
