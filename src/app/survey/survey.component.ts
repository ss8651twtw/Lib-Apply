import { Component, OnInit, DoCheck } from '@angular/core';
import { CookieService } from "../cookie.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpService } from "../http.service";

@Component( {
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: [ './survey.component.scss' ],
  host: {
    class: 'app-wrapper'
  },
  providers: [ HttpService ]
} )
export class SurveyComponent implements OnInit, DoCheck {

  constructor( private http: HttpService, private cookie: CookieService, private router: Router ) { }

  applydate: string;
  enable_second: boolean = false;

  ngOnInit() {
    var dd = new Date();
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    this.applydate = y + '-' + m + '-' + d;
  }

  ngDoCheck() {
    if ( this.cookie.checkAuth() == false ) {
      alert( '進不去QQ' );
      this.router.navigate( [ '' ] );
    }
  }

  onSubmitted( form: NgForm ) {
    this.http.sendSurveyData( form[ 'value' ] ).subscribe( data => console.log( data ), error => console.log( error ) );
  }

  setEnableSecond() {
    this.enable_second = true;
  }

}
