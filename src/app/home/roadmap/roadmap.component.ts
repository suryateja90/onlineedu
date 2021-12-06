import { Component, OnInit } from '@angular/core';
import { roadMap } from 'src/app/mock/consultancyprops';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  map = roadMap.roadmap;
  token = roadMap.tokenomics;
  team = roadMap.team;
  constructor() { }

  ngOnInit() {
  }



}
