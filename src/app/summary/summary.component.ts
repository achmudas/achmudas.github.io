import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  title = 'Remigijus Kutkaitis';

  summaryContent = 
  `I\'m Remigijus. I want to build something. Something what would make impact.
  
  To achieve that I'm creating different projects.
  
  Let's create something instead of destroying.`;

  constructor() { }

  ngOnInit(): void {
  }

}
