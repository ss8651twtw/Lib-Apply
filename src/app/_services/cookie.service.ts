import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
  getCookie( key: string ) {
    let cookies = document.cookie.split( ';' );
    for ( let i in cookies ) {
      if ( cookies[ i ].trim().split( '=' )[ 0 ] == key ) return cookies[ i ].trim().split( '=' )[ 1 ];
    }
    return "";
  }

  setCookie( key: string, value: string ) {
    document.cookie = key + "=" + value;
  }
}
