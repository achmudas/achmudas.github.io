import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post | undefined;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPost(id).subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

}
