import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css'],
  providers: [NgbCarouselConfig] 
})
export class ImagesliderComponent implements OnInit {

  @ViewChild('carousel', {static: true}) carousel: any;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  slides = [];
  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    // this.slides = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

  ngOnInit() {
    this.slides = ['assets/images/learn1.jpg', 'assets/images/learn2.jpg', 'assets/images/learn3.jpg'];
  }

}
