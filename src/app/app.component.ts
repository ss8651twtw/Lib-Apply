import { Component, OnInit } from '@angular/core';
import { AuthService } from "./_services/auth.service";
import { CookieService } from "./_services/cookie.service";

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  host: { class: 'sticky-wrapper' }
} )
export class AppComponent implements OnInit {

  constructor( private cookie: CookieService, private auth: AuthService ) {}

  ngOnInit() {
    if ( this.cookie.getCookie("login") == "true" ){
      this.auth.authority = this.cookie.getCookie("Type");
    }
  }
}

