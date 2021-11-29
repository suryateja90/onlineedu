import { Component, OnInit } from '@angular/core';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-coursesection',
  templateUrl: './coursesection.component.html',
  styleUrls: ['./coursesection.component.css']
})
export class CoursesectionComponent implements OnInit {
  courses: any;
  allCourses;
  learnings: any;
  constructor(private cds: CoursedataService) { }
  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.cds.fetchCourses().subscribe((res) => {
      this.courses = res;
      this.allCourses = JSON.parse(JSON.stringify(this.courses))
      this.learnings = [];
      for(let i of this.courses) {
        let obj = {
          name: i.course_name
        }
        this.learnings.push(obj);
      }
    });
  }

  openCourse(c) {
    let selectedCourse = this.allCourses.filter((e) => {
      if(e.course_name === c.name) {
        return e;
      }
    })
    this.courses = selectedCourse;
  }
  // getCourseNames() {
  //   this.cds.fetchCourseNames().subscribe((res) => {
  //     this.learnings = res;
  //   });
  // }
}
