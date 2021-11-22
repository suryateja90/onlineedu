import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desccardone',
  templateUrl: './desccardone.component.html',
  styleUrls: ['./desccardone.component.css']
})
export class DesccardoneComponent implements OnInit {

  @Input() alignment = 'right';

  constructor() { }

  ngOnInit() {
  }

}
