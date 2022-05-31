import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  title = "Portfolio";

  portfolioItems : PortfolioItem[] = [
    {
      id: 1, 
      projectName: "iTunes music service", 
      technologies: "Java, Spring Boot, H2, OpenAPI, Docker", 
      image: "assets/portfolio/music-service.gif",
      description: "Service is used to search and store favorite artist along with 5 top albums from iTunes API providing retrieved data through REST API.",
      githubRepo: "https://github.com/achmudas/music-service",
      link: ""
    },
    {
      id: 2, 
      projectName: "Go Websocket chat", 
      technologies: "Go, Gorilla WebSocket, randname",
      image: "assets/portfolio/websocket-chat.gif",
      description: "Chat server and client written in Go and communicating using websocket.",
      githubRepo: "https://github.com/achmudas/websocket-chat",
      link: ""
    },
    {
      id: 3, 
      projectName: "Fair", 
      technologies: "Unity, C#",
      image: "assets/portfolio/fair.gif",
      description: "Simple game, where player needs to split grouping fair participants to avoid riots.",
      githubRepo: "https://github.com/achmudas/Fair",
      link: ""
    },
    {
      id: 4, 
      projectName: "Mobile brainstorming", 
      technologies: "Unity, C#",
      image: "assets/portfolio/mobile-brainstorming.gif",
      description: "POC for mobile game, where player needs to click matching colour. Also made pixel art but cannot find these sprites anymore.",
      githubRepo: "https://github.com/achmudas/MobileBrainstorm1",
      link: ""
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
