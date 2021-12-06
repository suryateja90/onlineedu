import { Component, OnInit } from '@angular/core';
import { testimonials } from 'src/app/mock/courseprops';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  tData = testimonials;
  constructor() { }

  ngOnInit() {
  }

}
