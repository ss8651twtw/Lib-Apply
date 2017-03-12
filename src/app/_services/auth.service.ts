import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { HttpConfigService } from "./http-config.service"

@Injectable()
export class AuthService {

  constructor( private http: Http, private httpConfig: HttpConfigService ) { }

  redirectUrl: string;

  login( data ) {
    return this.http.post( this.httpConfig.backend_url + "/api/checkAuth", this.httpConfig.urlEncode( data ), { headers: this.httpConfig.headers, withCredentials: true } )
      .map( ( data: Response ) => JSON.parse( data[ "_body" ] ) ).catch( this.httpConfig.handleError );
  }

  logout( data ) {
    return this.http.post( this.httpConfig.backend_url + "/api/cookie/remove", this.httpConfig.urlEncode( data ), { headers: this.httpConfig.headers, withCredentials: true } ).map((data: Response)=>(data.json())).catch(this.httpConfig.handleError);
  }

}
