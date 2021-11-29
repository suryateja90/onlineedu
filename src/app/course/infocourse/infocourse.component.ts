import { Component, OnInit } from '@angular/core';
import { higlights } from 'src/app/mock/courseprops';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-infocourse',
  templateUrl: './infocourse.component.html',
  styleUrls: ['./infocourse.component.css']
})
export class InfocourseComponent implements OnInit {

  keyhighlights;
  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    let val = this.cds.givesCourseObj(higlights, 111);
    this.keyhighlights = val.highlights;
    // this.cds.tab_mode_source.subscribe((val : any) => {
    //   if(val === 'Tab2') {
    //     this.keyhighlights = higlights.standard;
    //   }
    //   if(val === 'Tab3') {
    //     this.keyhighlights = higlights.Advanced;
    //   } else if(val === 'Tab1') {
    //     this.keyhighlights = higlights.basic
    //   }
    // })
  }


}
