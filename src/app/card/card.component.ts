import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ],
  host: {
    class: "app-wrapper"
  }
} )
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
