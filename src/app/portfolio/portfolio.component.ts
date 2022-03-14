import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

// #FIXME create object with image, text exitCode, put there

  // btnVisible = false;
  title = "Portfolio";

  portfolioItems : PortfolioItem[] = [
    {
      id: 1, 
      projectName: "Project name", 
      subtitle: "Small", 
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 2, 
      projectName: "Project name 2", 
      subtitle: "Small", 
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 3, 
      projectName: "Project name 3", 
      subtitle: "Small", 
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 4, 
      projectName: "Project name 4", 
      subtitle: "Small", 
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "Some description",
      githubRepo: "link to repo",
      link: "link"
    },
    {
      id: 5, 
      projectName: "Project name 5", 
      subtitle: "Small", 
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
