import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../_services/http.service";

@Component( {
  selector: 'app-manage-survey',
  templateUrl: 'manage-survey.component.html',
  styleUrls: [ 'manage-survey.component.scss' ],
  host: { class: "app-wrapper" },
  providers: [ HttpService ]
} )
export class ManageSurveyComponent implements OnInit {

  applyForms: any;

  constructor( private http: HttpService ) { }

  ngOnInit() { this.http.getSurveyData().subscribe( data => this.applyForms = data[ "data" ] );}

}
