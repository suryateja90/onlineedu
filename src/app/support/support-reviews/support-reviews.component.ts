import { Component, OnInit } from '@angular/core';
import { reviews } from 'src/app/mock/supportprops';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-support-reviews',
  templateUrl: './support-reviews.component.html',
  styleUrls: ['./support-reviews.component.css']
})
export class SupportReviewsComponent implements OnInit {
  views = reviews;
  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    let val =this.cds.givesSupportObj(reviews.support_reviews, 114);
    this.views = val.reviews;
  }

}
