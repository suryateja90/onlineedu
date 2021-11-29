import { Component, OnInit } from '@angular/core';
import { CoursedataService } from 'src/app/services/coursedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogpostpage',
  templateUrl: './blogpostpage.component.html',
  styleUrls: ['./blogpostpage.component.css']
})
export class BlogpostpageComponent implements OnInit {
  pageData;

  constructor(private cds: CoursedataService, private router:Router) { }

  ngOnInit() {
    if(this.cds.getBlogData()) {
      this.pageData = this.cds.getBlogData();
    } else {
      window.history.back()
    }
  }

}
