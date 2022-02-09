import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-essays',
  templateUrl: './essays.component.html',
  styleUrls: ['./essays.component.css']
})
export class EssaysComponent implements OnInit {
  
  essays: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getEssays();
  }

  getEssays(): void {
    this.essays = this.postsService.getEssays();
  }

}
