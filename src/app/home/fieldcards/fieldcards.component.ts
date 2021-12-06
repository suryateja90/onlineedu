import { Component, OnInit } from '@angular/core';
import { consultancyData } from 'src/app/mock/consultancyprops';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-fieldcards',
  templateUrl: './fieldcards.component.html',
  styleUrls: ['./fieldcards.component.css']
})
export class FieldcardsComponent implements OnInit {

  categories = consultancyData.placements;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getCategories() {
    let data = consultancyData.placements;
  }

 

}
