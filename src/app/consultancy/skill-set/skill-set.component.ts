import { Component, OnInit } from '@angular/core';
import { CoursedataService } from 'src/app/services/coursedata.service';
import { consultancyData } from 'src/app/mock/consultancyprops';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {

  skills;
  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    this.skills = this.cds.fetchConsultancy(consultancyData.placements, 102, 'services');
  }

}
