import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { mentorInfo } from 'src/app/mock/mentors';

@Component({
  selector: 'app-mentorslist',
  templateUrl: './mentorslist.component.html',
  styleUrls: ['./mentorslist.component.css']
})
export class MentorslistComponent implements OnInit {

  course_id = 111;
  mentorData;

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 1000;
    config.wrap = true;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  ngOnInit() {
    this.getMentors();
  }

  getMentors() {
    this.mentorData = mentorInfo.course_mentors.filter((v) => {
      return v.course_id === this.course_id;
    })[0]
    console.log(this.mentorData);
  }
  // mentorData = [
  //   {
  //     name: 'Walter White', course: 'Web Development', img: 'assets/images/team-1.jpg',
  //     desc: ' Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'
  //   },
  //   {
  //     name: 'Sarah Jhinson', course: 'Marketing', img: 'assets/images/team-2.jpg',
  //     desc: ' Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'
  //   },
  //   {
  //     name: 'William Anderson', course: 'content', img: 'assets/images/team-3.jpg',
  //     desc: ' Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'
  //   },
  // ];
}
