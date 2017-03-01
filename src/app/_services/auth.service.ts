import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import { HttpConfigService } from "./http-config.service"

@Injectable()
export class AuthService {

  constructor( private http: Http, private httpConfig: HttpConfigService ) { }

  redirectUrl: string;

  login( data ) {
    return this.http.post( this.httpConfig.backend_domain + ':' + this.httpConfig.backend_port + "/api/checkAuth", this.httpConfig.urlEncode( data ), { headers: this.httpConfig.headers, withCredentials: true } )
      .map( ( data: Response ) => JSON.parse( data[ "_body" ] ) ).catch( this.httpConfig.handleError );
  }

  logout(): void {
    document.cookie = "login=false";
  }

}
