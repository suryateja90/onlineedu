import { Component, OnInit } from '@angular/core';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-coursesection',
  templateUrl: './coursesection.component.html',
  styleUrls: ['./coursesection.component.css']
})
export class CoursesectionComponent implements OnInit {
  courses: any;
  learnings: any;
  constructor(private cds: CoursedataService) { }
  ngOnInit() {
    this.getCourses();
    this.getCourseNames();
  }

  getCourses() {
    this.cds.fetchCourses().subscribe((res) => {
      this.courses = res;
    });
  }

  getCourseNames() {
    this.cds.fetchCourseNames().subscribe((res) => {
      this.learnings = res;
    });
  }
}
