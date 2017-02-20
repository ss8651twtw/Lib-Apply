import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CookieService } from "../_services/cookie.service";
import { Router } from "@angular/router";
import { HttpService } from "../_services/http.service";

declare var Materialize: any;

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  host: { class: "app-wrapper" },
  providers: [ HttpService ]
} )
export class LoginComponent {

  constructor( private http: HttpService, private cookie: CookieService, private router: Router ) { }

  private userId: string;
  private userPwd: string;

  onSubmitted( form: NgForm ) {
    this.userId = form[ 'value' ][ 'userid' ];
    this.userPwd = form[ 'value' ][ 'userpwd' ];

    this.http.checkAuth( { userId: this.userId, userPwd: this.userPwd } )
      .subscribe( data => this.check( data ) );
  }

  check( data ) {
    console.log( data );
  }

}
