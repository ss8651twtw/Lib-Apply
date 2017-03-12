import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CookieService } from "../_services/cookie.service";
import { Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";

declare var Materialize: any;

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
} )
export class LoginComponent {

  constructor( private auth: AuthService, private cookie: CookieService, private router: Router ) { }

  private username: string;
  private password: string;

  onSubmitted( form: NgForm ) {
    this.username = form[ 'value' ][ 'username' ];
    this.password = form[ 'value' ][ 'password' ];

    this.auth.login( { userId: this.username, userPwd: this.password } )
      .subscribe( data => this.check( data ) );
  }

  check( data ) {
    console.log( data );
    let authority = this.cookie.getCookie("type");
    if ( authority == "Admin" || authority == "Auth" || authority == "Teacher" ) {
      let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/';
      Materialize.toast( 'Welcome ' + this.username, 1000 );
      setTimeout( () => this.router.navigate( [ redirect ] ), 1500 );
    }
    else {
      Materialize.toast( 'Error : ' + data[ "message" ], 1000 );
    }
  }
}
