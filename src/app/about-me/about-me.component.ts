import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css'],
    standalone: false
})
export class AboutMeComponent implements OnInit {

  title = "Some things about me";

  aboutMeGeneralContent = 
  `My name is Remigijus. I'm from Lithuania, a small country in Europe near Baltic sea.
  
  I am always trying to learn new technologies that I would be able to use them in job-related and my personal
  projects. That's why I'm always working on some projects to learn those technologies as in my opinion the best way
  to learn something is just by doing.

  Another goal of mine is to create passive income by creating things which would be useful.`;

  aboutMeGamesContent = 
  `I'm passionate about video games. I have created some game prototypes using Unity. You can find them in Portfolio page.`;
  
  aboutMePersonalContent = 
  `To relax from all the computer stuff I'm reading books and keeping the bees.`;

  githubLink = 'https://github.com/achmudas';
  linkedInLink = 'https://www.linkedin.com/in/remigijuskutkaitis';

  constructor() { }

  ngOnInit(): void {
  }

}
