import { Component } from '@angular/core';
import { AuthService } from "../../_services/auth.service";
import { CookieService } from "../../_services/cookie.service";

@Component( {
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
} )
export class HeaderComponent {

  constructor( private cookie: CookieService, private auth: AuthService ) { }
  
  userLogout() {
  this.auth.logout({})
  .subscribe(data => console.log(data));
  }
}
