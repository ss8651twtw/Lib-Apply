import { Component, OnInit } from '@angular/core';
import { AuthService } from "./_services/auth.service";

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  host: { class: 'sticky-wrapper' }
} )
export class AppComponent implements OnInit {

  constructor( private auth: AuthService ) {}

  ngOnInit() {
    if ( document.cookie ) {
      let cookies = new Object();
      let originCookies = document.cookie.split( ' ' );
      for ( let i in originCookies ) {
        let _ = originCookies[ i ].split( '=' );
        cookies[ _[ 0 ] ] = _[ 1 ];
      }
      if ( "Type" in cookies ) {
        this.auth.isLoggedIn = true;
        this.auth.authority = cookies[ "Type" ];
      }
    }
  }
}

