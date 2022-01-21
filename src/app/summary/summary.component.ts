import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  title = 'Remigijus Kutkaitis';

  summaryText = 
  `I\'m Remigijus. I have a goal to achieve financial freedom.
  
  To achieve that I'm building different projects.
  
  Let's create something instead of destroying.

  TBD`;

  constructor() { }

  ngOnInit(): void {
  }

}
