import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../_services/request.service";

@Component( {
  selector: 'app-manage-survey',
  templateUrl: 'manage-survey.component.html',
  styleUrls: [ 'manage-survey.component.scss' ],
  host: { class: "app-wrapper" },
  providers: [ RequestService ]
} )
export class ManageSurveyComponent implements OnInit {

  applyForms: any;

  constructor( private request: RequestService ) { }

  ngOnInit() { this.request.getSurveyData().subscribe( data => this.applyForms = data[ "data" ] );}

  delete() {}

  change() {}

}
