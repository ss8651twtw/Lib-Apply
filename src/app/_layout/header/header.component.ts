import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../_services/auth.service";
import { CookieService } from "../../_services/cookie.service";

declare var $;

@Component( {
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
} )
export class HeaderComponent implements OnInit {

  constructor( private cookie: CookieService, private auth: AuthService ) { }

  ngOnInit(){
    $( document ).ready(function(){});
    $(".button-collapse").sideNav();
  }

  userLogout() {
    this.auth.logout( {} )
      .subscribe( data => console.log( data ) );
  }
}
