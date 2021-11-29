import { Component, OnInit } from '@angular/core';
import { blogDetails } from 'src/app/mock/courseprops';
import { Router } from '@angular/router';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-blogcards',
  templateUrl: './blogcards.component.html',
  styleUrls: ['./blogcards.component.css']
})
export class BlogcardsComponent implements OnInit {

  bData = blogDetails.blogs;
  constructor(private router:Router, private cds: CoursedataService) { }

  ngOnInit() {
  }

  navPost(b) {
    this.cds.setBlogData(b);
    this.router.navigate(['blogpostpage']);
  }

}
