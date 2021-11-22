import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfocourseComponent } from './infocourse/infocourse.component';
import { CourserequirementsComponent } from './courserequirements/courserequirements.component';
import { MentorslistComponent } from './mentorslist/mentorslist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourseinfolayoutComponent } from './courseinfolayout/courseinfolayout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: InfocourseComponent
    
  // },
  // {
  //   path: '',
  //   component: CoursedetailsComponent
    
  // },
  {
    path: '',
    component: CourseinfolayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgbModule,],
  exports: [RouterModule]
})
export class CourseRoutingModule { }