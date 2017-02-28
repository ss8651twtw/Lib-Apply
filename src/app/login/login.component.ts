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
  host: { class: "app-wrapper" },
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
    let authority = data[ "authority" ];
    if ( authority == "Admin" || authority == "Auth" || authority == "Teacher" ) {
      this.auth.isLoggedIn = true;
      this.auth.authority = authority;
      this.auth.username = this.username;
      let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/';
      Materialize.toast( 'Welcome ' + this.username, 1000 );
      setTimeout( () => this.router.navigate( [ redirect ] ), 1500 );
    }
    else {
      Materialize.toast( 'Error : ' + data[ "message" ], 1000 );
    }
  }

  /*
   check( data ) {
   if ( data[ "authority" ] == "Auth" ) {
   this.cookie.createCookie( "authority=Auth;" );
   Materialize.toast( 'Welcome Auth : ' + this.userId, 1000 );
   setTimeout( () => this.router.navigate( [ '' ] ), 1500 );
   }
   else if ( data[ "authority" ] == "Teacher" ) {
   this.cookie.createCookie( "authority=Teacher;" );
   Materialize.toast( 'Welcome Teacher : ' + this.userId, 1000 );
   setTimeout( () => this.router.navigate( [ '' ] ), 1500 );
   }
   else {
   Materialize.toast( 'You are not authorize : ' + data[ "message" ], 1000 );
   }
   }
   */
}
