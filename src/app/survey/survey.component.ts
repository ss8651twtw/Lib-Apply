import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CookieService } from "../_services/cookie.service";
import { RequestService } from "../_services/request.service";

declare var Materialize: any;

@Component( {
  selector: 'app-survey',
  templateUrl: 'survey.component.html',
  styleUrls: [ 'survey.component.scss' ],
  providers: [ RequestService ]
} )
export class SurveyComponent implements OnInit, DoCheck {

  constructor( private request: RequestService, private cookie: CookieService, private router: Router ) { }

  applydate: string;
  enable_second: boolean = false;

  ngOnInit() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    this.applydate = y + '-' + m + '-' + d;
  }

  ngDoCheck() { }

  onSubmitted( form: NgForm ) {
    let formData = form['value'];
    formData['time'] = this.applydate;
    this.request.sendSurveyData( formData ).subscribe( data => this.showMessage( data ), error => console.log( error ) );
  }

  showMessage(data: string) {
    console.log(data);
    if (JSON.parse(data["_body"]).status == 200) {
      Materialize.toast("已成功送出", 1000);
      setTimeout( () => this.router.navigate([""]), 1500);
    }
    else Materialize.toast("送出失敗，請稍後再試", 1000);
  }

  setEnableSecond() {
    this.enable_second = true;
  }

}
