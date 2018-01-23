import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs-navigation-options',
  templateUrl: './blogs-navigation-options.component.html',
  styleUrls: ['./blogs-navigation-options.component.css']
})
export class BlogsNavigationOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //********* */
  // Blogs should be fetched only once from the server and then filtered based on date, rates, and views
  //********* */
  

  // Fetch/filter most recent blogs
  onMostRecent(){

  }

  // filter top rate blogs
  onTopRated(){

  }

  // filter most viewed blogs
  onMostViewed(){

  }

}
