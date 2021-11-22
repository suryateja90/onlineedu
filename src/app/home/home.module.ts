import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoursesectionComponent } from './coursesection/coursesection.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { DesccardoneComponent } from './desccardone/desccardone.component';
import { FieldcardsComponent } from './fieldcards/fieldcards.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FootersectionComponent } from './footersection/footersection.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostpageComponent } from './blogpostpage/blogpostpage.component';
import { HomeRoutingModule } from './home-routing.module';
import { BlogcardsComponent } from './blogcards/blogcards.component';



@NgModule({
  declarations: [HomeinfoComponent, ImagesliderComponent, CoursesectionComponent, CourseinfoComponent, DesccardoneComponent, FieldcardsComponent, ContactformComponent, FootersectionComponent, TopbarComponent, BlogpostsComponent, BlogpostpageComponent, BlogcardsComponent],
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [HomeinfoComponent, ImagesliderComponent, CourseinfoComponent, DesccardoneComponent, FieldcardsComponent, BlogpostsComponent, BlogpostpageComponent]
})
export class HomeModule { }
