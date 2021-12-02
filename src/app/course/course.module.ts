import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfocourseComponent } from './infocourse/infocourse.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourserequirementsComponent } from './courserequirements/courserequirements.component';
import { MentorslistComponent } from './mentorslist/mentorslist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourseinfolayoutComponent } from './courseinfolayout/courseinfolayout.component';
import { CoursebannerComponent } from './coursebanner/coursebanner.component';
import { CourseservicesComponent } from './courseservices/courseservices.component';



@NgModule({
  declarations: [InfocourseComponent, CourserequirementsComponent, MentorslistComponent, CoursedetailsComponent, CourseinfolayoutComponent, CoursebannerComponent, CourseservicesComponent],
  imports: [
    CommonModule,
    CourseRoutingModule, NgbModule
  ],
  exports: [CourserequirementsComponent, InfocourseComponent]
})
export class CourseModule { }
