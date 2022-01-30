import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMeTitle = "TBD";

  aboutMeText = `TBD
  link to twitter, linkedin, github
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
