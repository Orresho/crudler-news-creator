import { PostService } from './../../../../_services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.css']
})
export class BlogTemplateComponent implements OnInit {

  // Posts array
  posts = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAllPosts();
    console.log(this.posts);
  }

  getAllPosts(){
    this.postService.getAllPosts()
      .subscribe(data => {
        this.posts = data.posts;
      });
  }

}
