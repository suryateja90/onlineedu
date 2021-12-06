import { Component, OnInit } from '@angular/core';
import { consultancyData } from 'src/app/mock/consultancyprops';
import { CoursedataService } from 'src/app/services/coursedata.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs
  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    this.jobs = this.cds.fetchConsultancy(consultancyData.placements, 102, 'jobs');
  }

}
