import { Component, OnInit } from '@angular/core';
import { DailyUpdate } from '../daily-update';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.css']
})
export class DailyUpdatesComponent implements OnInit {

  dailyUpdate: DailyUpdate = {
    id: 1,
    title: 'January 17 | Work',
    text: 'Some text about what I did'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
