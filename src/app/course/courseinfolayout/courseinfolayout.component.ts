import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseinfolayout',
  templateUrl: './courseinfolayout.component.html',
  styleUrls: ['./courseinfolayout.component.css']
})
export class CourseinfolayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scroll();
  }

  
  scroll() {
    const elementList = document.querySelectorAll('.course-banner');
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

