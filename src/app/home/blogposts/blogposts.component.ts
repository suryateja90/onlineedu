import { Component, OnInit } from '@angular/core';
import { blogDetails } from 'src/app/mock/courseprops';
import { Router } from '@angular/router';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {
  blogPosts = blogDetails.blogs;
  pageSize = 2;
  page = 1;
  constructor(private router: Router, private cds: CoursedataService) { }

  ngOnInit() {
    this.addSamplePara();
  }

  addSamplePara() {
    this.blogPosts.forEach((val, index, arr) => {
      if (val && val.topics) {
        val['sampleText'] = val.topics[0].paras[0].para
        // val.topics.forEach((el) => {
        //   if (el.paras && el.paras.length && el.paras) {
        //     val['sampleText'] = el.paras[0].para;
        //   }
        // })
      }
    })
  }

  navBlog(i, b) {
    this.cds.setBlogData(b);
    this.router.navigate(['blogpostpage']);
  }
}
