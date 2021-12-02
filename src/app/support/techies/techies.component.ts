import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { techies } from 'src/app/mock/supportprops';
import { CoursedataService } from 'src/app/services/coursedata.service';
@Component({
  selector: 'app-techies',
  templateUrl: './techies.component.html',
  styleUrls: ['./techies.component.css']
})
export class TechiesComponent implements OnInit {

  getTechies;
  techiesChunk;
  constructor(config: NgbCarouselConfig, private cds: CoursedataService) { 
    config.interval = 2500;
  }

  ngOnInit() {
    let val =this.cds.givesSupportObj(techies.support_teams, 114);
    this.getTechies = val.mentors;
    this.techiesChunk = this.cds.arrayChunks(this.getTechies, 3);
  }
}

