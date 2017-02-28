import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { HttpConfigService } from "./http-config.service"
import { AuthService } from "./auth.service";

@Injectable()
export class RequestService {

  constructor( private http: Http, private httpConfig: HttpConfigService, private auth: AuthService ) { }

  checkUser( userid ) {
    return this.http.get( this.httpConfig.backend_domain + ':' + this.httpConfig.backend_port + "/api/checkUser" + userid )
      .map( ( response: Response ) => JSON.parse( response[ "_body" ] ) ).catch( this.httpConfig.handleError );
  }

  getBookData() {
    return this.http.get( this.httpConfig.backend_domain + ':' + this.httpConfig.backend_port + "/api/book" )
      .map( ( response: Response ) => response.json() ).catch( this.httpConfig.handleError );
  }

  getSurveyData() {
    return this.http.get( this.httpConfig.backend_domain + ':' + this.httpConfig.backend_port + "/api/survey" )
      .map( ( response: Response ) => response.json() ).catch( this.httpConfig.handleError );
  }

  sendBookData( data: any ) {
    return this.http.post( this.httpConfig.backend_domain + ':' + this.httpConfig.backend_port + "/api/book", this.httpConfig.urlEncode( data ), { headers: this.httpConfig.headers, withCredentials: true } )
      .map( ( data: Response ) => data ).catch( this.httpConfig.handleError );
  }

  sendSurveyData( data: any ) {
    return this.http.post( this.httpConfig.backend_domain + ':' + this.httpConfig.backend_port + "/api/survey", this.httpConfig.urlEncode( data ), { headers: this.httpConfig.headers, withCredentials: true } )
      .map( ( data: Response ) => data ).catch( this.httpConfig.handleError );
  }

}
