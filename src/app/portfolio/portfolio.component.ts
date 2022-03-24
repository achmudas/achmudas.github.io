import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

// #FIXME create object with image, text exitCode, put there
// #FIXME put all hover on animations effect with delay

  // btnVisible = false;
  title = "Portfolio";

  portfolioItems : PortfolioItem[] = [
    {
      id: 1, 
      projectName: "Project name", 
      subtitle: "technologie 1, technologie 2", 
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 2, 
      projectName: "Project name 2", 
      subtitle: "technologie 1, technologie 2",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some longer description to see how multiple lines are handled.",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 3, 
      projectName: "Project name 3", 
      subtitle: "technologie 1, technologie 2",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 4, 
      projectName: "Project name 4", 
      subtitle: "technologie 1, technologie 2",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 5, 
      projectName: "Project name 5", 
      subtitle: "technologie 1, technologie 2",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
