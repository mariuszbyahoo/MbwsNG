import { Component, OnInit } from '@angular/core';
import { IPost } from './post';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  pageTitle:  string = "Post Detail";
  post: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
