import { Component, DoCheck } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CookieService } from "../_services/cookie.service";
import { RequestService } from "../_services/request.service"

@Component( {
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: [ 'book.component.scss' ],
  host: { class: 'app-wrapper' },
  providers: [ RequestService ]
} )
export class BookComponent implements DoCheck {

  constructor( private request: RequestService, private cookie: CookieService, private router: Router ) { }

  enable_second: boolean = false;

  ngDoCheck() { }

  onSubmitted( form: NgForm ) {
    this.request.sendBookData( form[ 'value' ] ).subscribe( data => console.log( data ), error => console.log( error ) );
  }

  setEnableSecond() {
    this.enable_second = true;
  }

}
