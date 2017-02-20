import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() {
  }

  getCookies() {
    let cookies: any = decodeURIComponent( document.cookie );
    if ( cookies[ cookies.length - 1 ] != ';' ) cookies += ';';
    cookies = cookies.split( ';' );
    cookies.pop();
    let cookiesObject = new Object;
    for ( let cookie of cookies ) {
      let key = cookie.split( '=' )[ 0 ];
      let value = cookie.split( '=' )[ 1 ];
      cookiesObject[ key ] = value;
    }
    return cookiesObject;
  }

  checkAuth() {
    let cookies: any = this.getCookies();
    return cookies[ "authority" ] == "Auth";
  }

  checkTeacher() {
    let cookies: any = this.getCookies();
    return cookies[ "authority" ] == "Teacher";
  }

  /*
   getType() {
   return parseInt( decodeURIComponent( document.cookie ).split( ';' ).pop()[ 1 ] );
   }

   getId() {
   return decodeURIComponent( document.cookie ).split( ';' ).pop().substring( 2 );
   }

   checkAdmin() {
   return this.checkUser() && this.getType() == 0 && this.getId() == 'admin';
   }

   checkTeacher() {
   return this.checkUser() && this.getType() <= 1;
   }

   _checkAuth() {
   return this.checkUser() && this.getType() <= 2;
   }

   checkUser() {
   return !(this.getId() == 'undefined' || this.getId() == '');
   }
   */
  clearCookie() {
    document.cookie = "authority=;";
  }

  createCookie( val: string ) {
    document.cookie = val;
  }

}
