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
  blogData: any;

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

  setBlogData(b) {
    this.blogData = b;
  }

  getBlogData() {
    return this.blogData;
  }

  givesCourseObj(arr, courseId) {
    return arr.filter((v) => {
      return v.course_id === courseId;
    })[0];
  }

  givesSupportObj(arr, support_id) {
    return arr.filter((v) => {
      return v.support_id === support_id;
    })[0];
  }

  arrayChunks(arr, chunkSize) {
    const perChunk = chunkSize // items per chunk    

    let inputArray = arr;
    
    const result = inputArray.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/perChunk)
    
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
    
      resultArray[chunkIndex].push(item)
    
      return resultArray
    }, [])
    return result;
  }


  fetchConsultancy(repo, id, obj) 
  {
    let consultancyObj;
    let data = repo;
    var requestedObj: any;
    data.filter((val) => {
    if (val.id === id) {
      consultancyObj = val;
      return val;
    }
    })

    for (let key in consultancyObj) {
      if (obj === key) { 
        requestedObj = consultancyObj[key];
        break;
      }
    }
    return requestedObj;
  }

  scroll(val) {
    const elementList = document.querySelectorAll(val);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
