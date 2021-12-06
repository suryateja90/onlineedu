import { Component, OnInit } from '@angular/core';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-homeinfo',
  templateUrl: './homeinfo.component.html',
  styleUrls: ['./homeinfo.component.css']
})
export class HomeinfoComponent implements OnInit {

  constructor(private cds: CoursedataService) { }

  ngOnInit() {
  }

  scroll(v) {
    this.cds.scroll(v);
  }

}
