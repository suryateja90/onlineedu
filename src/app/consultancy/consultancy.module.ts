import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy-routing.module';
import { ConsLayoutComponent } from './cons-layout/cons-layout.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { JobsComponent } from './jobs/jobs.component';
import { CourserequirementsComponent } from '../course/courserequirements/courserequirements.component';


@NgModule({
  declarations: [ConsLayoutComponent, CourserequirementsComponent, SkillSetComponent, JobsComponent],
  imports: [
    CommonModule,
    ConsultancyRoutingModule
  ],
  exports: [ConsLayoutComponent]
})
export class ConsultancyModule { }
