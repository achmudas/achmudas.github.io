import { Injectable } from '@angular/core';
import { DailyUpdate } from './daily-update';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { 
  }

  getDailyUpdates() : DailyUpdate[] {
    const DAILY_UPDATES : DailyUpdate[] = [
      {id: 1, title: "January 17 | Work", text: "aaamazing post with detailed text 1 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
      {id: 2, title: "January 18 | Work", text: "aaamazing post with detailed text 2 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
      {id: 3, title: "January 19 | Work", text: "aaamazing post with detailed text 3 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
      {id: 4, title: "January 20 | Work", text: "aaamazing post with detailed text 4 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
      {id: 5, title: "January 21 | Work", text: "aaamazing post with detailed text 5 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
      {id: 6, title: "January 22 | Work", text: "aaamazing post with detailed text 6 long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill long text to that wouldn't fill"},
    ]

    return DAILY_UPDATES;
  }
}
