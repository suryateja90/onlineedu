import { Component, OnInit } from '@angular/core';
import { blogDetails } from 'src/app/mock/courseprops';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {
  blogposts = blogDetails;
  constructor() { }

  ngOnInit() {
  }

}
