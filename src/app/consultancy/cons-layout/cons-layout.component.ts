import { Component, OnInit, Input } from '@angular/core';
import { CoursedataService } from 'src/app/services/coursedata.service';
import { consultancyData } from 'src/app/mock/consultancyprops';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cons-layout',
  templateUrl: './cons-layout.component.html',
  styleUrls: ['./cons-layout.component.css']
})
export class ConsLayoutComponent implements OnInit {

  displayRoles = false;
  dataCons  =consultancyData;
  consReq;
  consId;
  constructor(private cds: CoursedataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteDetails();
  }

  getCons(id) {
    let obj
    consultancyData.placements.filter((val) => {
      if (val.id === id) {
        obj = val;
        return;
      }
    })
    return obj;
  }

  getRouteDetails() {
    this.route.params.subscribe(params => {
     this.consId = params['id'];
     });
     if (this.consId) {
       const id = Number(this.consId);
       for (const i of consultancyData.placements) {
        if(i.id === id) {
          this.consReq = this.cds.fetchConsultancy(consultancyData.placements, id, 'who_can_apply');
          this.dataCons = this.getCons(id);
        } 
       }
     }
     else {
      window.history.back();
    }
}

}
