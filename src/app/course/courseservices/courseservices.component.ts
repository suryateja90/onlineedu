import { Component, OnInit } from '@angular/core';
import { courseServices } from 'src/app/mock/courseprops';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-courseservices',
  templateUrl: './courseservices.component.html',
  styleUrls: ['./courseservices.component.css']
})
export class CourseservicesComponent implements OnInit {

  services;
  headings = [];
  headActive = 'Job Assistance'
  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    this.services = this.cds.givesCourseObj(courseServices, 111);
    this.formHeadings();
  }

  formHeadings() {
    for (const i of this.services.job_procedures) {
      this.headings.push(i.procedure_type);
    }
  }

  changeTab(head) {
    this.headActive = head;
  }

}
