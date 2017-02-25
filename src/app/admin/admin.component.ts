import { Component, DoCheck } from '@angular/core';
import { CookieService } from "../_services/cookie.service";
import { Router } from "@angular/router";

@Component( {
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: [ 'admin.component.scss' ],
  host: { class: "app-wrapper" },
} )
export class AdminComponent implements DoCheck {

  constructor( private cookie: CookieService, private router: Router ) { }

  ngDoCheck() {
    /*if ( this.cookie.checkAdmin() == false ) {
     alert( '進不去QQ' );
     this.router.navigate( [ '' ] );
     }*/
  }

}
