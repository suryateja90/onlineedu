import { Component, OnInit } from '@angular/core';
import { basicCourseContent } from 'src/app/mock/courseprops'
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  courseList;
  disabled = false;
  content;
  sessionsPeriod;

  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    this.courseList = this.cds.givesCourseObj(basicCourseContent.course_contents, 111)
    this.sessionsPeriod = this.courseList.course_topics.reduce((n, {sessions}) => n + sessions, 0)
    
  }

}
