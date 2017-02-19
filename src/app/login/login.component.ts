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
  host: {
    class: "app-wrapper"
  },
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
      .subscribe( data => this.secondStage( data ) );
  }

  secondStage( first_data ) {
    this.http.checkTeacher( { userId: this.userId, userPwd: this.userPwd } )
      .subscribe( data => this.finalStage( first_data, data ) );
  }

  finalStage( first_data, second_data ) {
    console.log( first_data );
    console.log( second_data );
    if ( second_data.status == 200 ) {
      Materialize.toast( 'Welcome Teacher ' + this.userId, 1000 );
      setTimeout( () => this.router.navigate( [ '' ] ), 1500 );
    }
    else if ( first_data.status == 200 ) {
      Materialize.toast( 'Welcome User ' + this.userId, 1000 );
      setTimeout( () => this.router.navigate( [ '' ] ), 1500 );
    }
    else {
      console.log( first_data );
      Materialize.toast( 'Failed to Login : ' + first_data.message, 1000 );
    }
  }

}
