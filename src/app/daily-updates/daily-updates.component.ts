import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-daily-updates',
    templateUrl: './daily-updates.component.html',
    styleUrls: ['./daily-updates.component.css'],
    standalone: false
})
export class DailyUpdatesComponent implements OnInit {

  dailyUpdates: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getDailyUpdates();
  }

  getDailyUpdates(): void {
    this.dailyUpdates = this.postsService.getDailyUpdates();
  }

}
