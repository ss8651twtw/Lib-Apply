import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CookieService } from "../_services/cookie.service";
import { RequestService } from "../_services/request.service"

@Component( {
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: [ 'book.component.scss' ],
  providers: [ RequestService ]
} )
export class BookComponent implements OnInit {

  constructor( private request: RequestService, private cookie: CookieService, private router: Router ) { }

  enable_second: boolean = false;
  applydate: string;

  ngOnInit() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    this.applydate = y + '-' + m + '-' + d;
  }

  onSubmitted( form: NgForm ) {
    let formData = form['value'];
    formData['time'] = this.applydate;
    this.request.sendBookData( formData ).subscribe( data => console.log( data ), error => console.log( error ) );
  }

  setEnableSecond() {
    this.enable_second = true;
  }

}
