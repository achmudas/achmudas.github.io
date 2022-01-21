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
      {id: 1, title: "January 17 | Work", text: "amazing post with detailed text 1"},
      {id: 2, title: "January 18 | Work", text: "amazing post with detailed text 2"},
      {id: 3, title: "January 19 | Work", text: "amazing post with detailed text 3"},
      {id: 4, title: "January 20 | Work", text: "amazing post with detailed text 4"},
      {id: 5, title: "January 21 | Work", text: "amazing post with detailed text 5"},
      {id: 6, title: "January 22 | Work", text: "amazing post with detailed text 6"},
    ]

    return DAILY_UPDATES;
  }
}
