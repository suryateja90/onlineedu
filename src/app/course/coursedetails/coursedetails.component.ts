import { Component, OnInit } from '@angular/core';
import { basicCourseContent } from 'src/app/mock/courseprops'
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  disabled = false;

  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    
  }

  courseList = basicCourseContent;

}
