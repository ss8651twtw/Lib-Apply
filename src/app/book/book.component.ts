import { Component, DoCheck } from '@angular/core';
import { CookieService } from "../cookie.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpService } from "../http.service"

@Component( {
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: [ './book.component.scss' ],
  providers: [ HttpService ]
} )
export class BookComponent implements DoCheck {

  constructor( private http: HttpService, private cookie: CookieService, private router: Router ) { }

  enable_second: boolean = false;

  ngDoCheck() {
    if ( this.cookie.checkTeacher() == false ) {
      alert( '進不去QQ' );
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
