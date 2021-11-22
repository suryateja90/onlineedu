import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { courseProps, learnings } from '../mock/courseprops';

@Injectable({
  providedIn: 'root'
})
export class CoursedataService {
  courses: any;
  learnings: any;
  course
  tab_mode_source = new BehaviorSubject([]);
  tab_mode = this.tab_mode_source.asObservable();

  constructor() { }

  fetchCourses() {
    this.courses = courseProps;
    return of(this.courses);
  }

  fetchCourseNames() {
    this.learnings = learnings;
    return of(this.learnings);
  }


  setTabMode(draft_mode) {
    this.tab_mode_source.next(draft_mode);
}
}
