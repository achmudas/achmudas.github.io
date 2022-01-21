import { Component, OnInit } from '@angular/core';
import { DailyUpdate } from '../daily-update';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.css']
})
export class DailyUpdatesComponent implements OnInit {

  dailyUpdates: DailyUpdate[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getDailyUpdates();
  }

  getDailyUpdates(): void {
    this.dailyUpdates = this.postsService.getDailyUpdates();
  }

}
