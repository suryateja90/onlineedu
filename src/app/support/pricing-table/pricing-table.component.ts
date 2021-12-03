import { Component, OnInit } from '@angular/core';
import { CoursedataService } from 'src/app/services/coursedata.service';
import { prices } from 'src/app/mock/supportprops';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  Object = Object;
  pricesInfo = prices;
  priceList;
   services: any;

  constructor(private cds: CoursedataService) { }

  ngOnInit() {
    let val = this.fetchObj(prices.supports, 114);
    this.services = val.services;
    this.formObj();
  }

  fetchObj(arr, support_id) {
    return arr.filter((v) => {
      return v.id === support_id;
    })[0];
  }

  formObj() {
    let i: any;
    let price = {};
    let obj;
    for (i of this.services) {
      let v = i.service_name;
      obj = {
        [v] : {
          course: this.pricesInfo.supports[0].course_name,
          features: i.features,
          price: i.price,
        }
      }
      price = {...price, ...obj};
    }
    this.priceList = price;
  }

}
