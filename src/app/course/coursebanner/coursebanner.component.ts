import { Component, OnInit, Input } from '@angular/core';
import { higlights } from 'src/app/mock/courseprops';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-coursebanner',
  templateUrl: './coursebanner.component.html',
  styleUrls: ['./coursebanner.component.css']
})
export class CoursebannerComponent implements OnInit {

  currentTab = 'Tab1';
  keyhighlights;
  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    this.keyhighlights = higlights.basic;
  }

  tabs = [{title: 'Tab1'}, {title: 'Tab2'}, {title: 'Tab3'}]

  tabClick(t) {
      this.currentTab = `Tab${t+1}`;
      this.cds.setTabMode(this.currentTab);
  }

}