import { Component, DoCheck } from '@angular/core';
import { CookieService } from "../_services/cookie.service";

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements DoCheck {

  constructor( private cookie: CookieService ) { }

  login: boolean = false;
  admin: boolean = false;

  ngDoCheck() {
    this.login = ( this.cookie.checkAuth() || this.cookie.checkTeacher() );
  }

  onClicked() {
    this.cookie.clearCookie();
    this.login = false;
    this.admin = false;
  }

}
