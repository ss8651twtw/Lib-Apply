import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from "./auth.service";
import { CookieService } from "./cookie.service";

declare var Materialize: any;

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild {
  constructor( private cookie: CookieService, private auth: AuthService, private router: Router ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let url: string = state.url;
    if ( url.substring( 0, 6 ) == "/admin" ) return this.checkLogin( url, "Admin" );
    else if ( url.substring( 0, 7 ) == "/book" ) return this.checkLogin( url, "Teacher" );
    else if ( url.substring( 0, 7 ) == "/survey" ) return this.checkLogin( url, "Auth" );
    else console.log( "Shit happened in auth-guard.service.ts line 16..." );
  }

  canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    return this.canActivate( route, state );
  }

  checkLogin( url: string, authority: string ): boolean {
    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;

    if ( this.cookie.getCookie( "login" ) == "true" ) {
      if ( this.getLevel( this.cookie.getCookie( "type" ) ) >= this.getLevel( authority ) ) { return true; }
      else {
        Materialize.toast( 'You are not authorize', 1000 );
        this.router.navigate( [ '' ] );
        return false;
      }
    }
    else {
      // Navigate to the login page with extras
      this.router.navigate( [ '/login' ] );
      return false;
    }
  }

  getLevel( authority: string ) {
    if ( authority == "Admin" )return 3;
    else if ( authority == "Teacher" )return 2;
    else if ( authority == "Auth" )return 1;
    else return 0;
  }
}
