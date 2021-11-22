import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mentorslist',
  templateUrl: './mentorslist.component.html',
  styleUrls: ['./mentorslist.component.css']
})
export class MentorslistComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 1000;
    config.wrap = true;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  ngOnInit() {
  }

  mentorData = [
    {
      name: 'Walter White', course: 'Web Development', img: 'assets/images/team-1.jpg',
      desc: ' Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'
    },
    {
      name: 'Sarah Jhinson', course: 'Marketing', img: 'assets/images/team-2.jpg',
      desc: ' Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'
    },
    {
      name: 'William Anderson', course: 'content', img: 'assets/images/team-3.jpg',
      desc: ' Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'
    },
  ];
}
