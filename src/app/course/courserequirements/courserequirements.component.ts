import { Component, OnInit, Input } from '@angular/core';
import { courseEligibility, jobRoles, courses } from 'src/app/mock/courseprops';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-courserequirements',
  templateUrl: './courserequirements.component.html',
  styleUrls: ['./courserequirements.component.css']
})
export class CourserequirementsComponent implements OnInit {

  @Input() showRoles = true;
  @Input() consData;
  eligibilities;
  jobs;
  course;

  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    this.eligibilities = this.cds.givesCourseObj(courseEligibility.candidate_eligibilities, 111);
    this.jobs = this.cds.givesCourseObj(jobRoles.job_roles, 111);
    courses.courses.forEach(element => {
    if (element.course_id === 111) {
      this.course = element;
    }  
    });
    if (this.consData) {
      this.eligibilities['eligibilities'] = this.consData;
    }
  }

  
}
