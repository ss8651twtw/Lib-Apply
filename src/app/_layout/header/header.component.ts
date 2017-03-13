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

  private nowLanguage: string;
  private otherLanguage: string;

  constructor( private cookie: CookieService, private auth: AuthService ) { }

  ngOnInit() {
    $( document ).ready( function () {
      $( 'select' ).material_select();
      $( ".button-collapse" ).sideNav();
    } );
    this.nowLanguage = this.cookie.getCookie("language") == "chinese" ? "中文" : "English";
    this.otherLanguage = this.cookie.getCookie("language") == "english" ? "中文" : "English";
  }

  userLogout() {
    this.auth.logout( {} )
      .subscribe( data => console.log( data ) );
  }

  changeLanguage() {
    if ( this.cookie.getCookie( "language" ) == "chinese" ) this.cookie.setCookie( "language", "english" );
    else this.cookie.setCookie( "language", "chinese" );
  }
}
