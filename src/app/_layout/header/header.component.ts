import { Component, DoCheck } from '@angular/core';
import { CookieService } from "../../_services/cookie.service";
import { AuthService } from "../../_services/auth.service";

@Component( {
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
} )
export class HeaderComponent implements DoCheck {

  constructor( private auth: AuthService, private cookie: CookieService ) { }

  login: boolean = false;

  ngDoCheck() {
    this.login = this.auth.isLoggedIn;
  }

}
