import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  Object = Object;
  priceList = {
    storage: {
      free: '500 MB',
      basic: '100 GB',
      standard: '149.0'
    },
    bandwidth: {
      free: '100 TB',
      basic: '500 TB',
      standard: '1000 TB'
    },
    securty: {
      free: '100% SECURE',
      basic: '100% SECURE',
      standard: '100% SECURE'
    },
    support: {
      free: 'No Support',
      basic: 'Phone',
      standard: 'E-MAIL / PHONE'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
