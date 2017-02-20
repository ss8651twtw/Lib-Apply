import { Component, DoCheck } from '@angular/core';
import { CookieService } from "../_services/cookie.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpService } from "../_services/http.service"

declare var Materialize: any;

@Component( {
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: [ './book.component.scss' ],
  host: { class: 'app-wrapper' },
  providers: [ HttpService ]
} )
export class BookComponent implements DoCheck {

  constructor( private http: HttpService, private cookie: CookieService, private router: Router ) { }

  enable_second: boolean = false;

  ngDoCheck() {
    if ( this.cookie.checkTeacher() == false ) {
      Materialize.toast( 'You are not authorize...' , 1000 );
      this.router.navigate( [ '' ] );
    }
  }

  onSubmitted( form: NgForm ) {
    this.http.sendBookData( form[ 'value' ] ).subscribe( data => console.log( data ), error => console.log( error ) );
  }

  setEnableSecond() {
    this.enable_second = true;
  }

}
