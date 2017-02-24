import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from "./auth.service";

declare var Materialize: any;

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild {
  constructor( private auth: AuthService, private router: Router ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let url: string = state.url;
    if ( url.substring( 0, 6 ) == "/admin" ) return this.checkLogin( url, "Auth" );
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

    if ( this.auth.isLoggedIn ) {
      if ( this.auth.authority == authority ) { return true; }
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
}
