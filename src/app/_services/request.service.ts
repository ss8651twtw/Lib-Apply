import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { HttpConfigService } from "./http-config.service"
import { AuthService } from "./auth.service";

@Injectable()
export class RequestService {

  constructor( private http: Http, private httpConfig: HttpConfigService, private auth: AuthService ) { }

  getBookData() {
    return this.http.get( this.httpConfig.backend_url + "/api/book", { withCredentials: true } )
      .map( ( response: Response ) => response.json() ).catch( this.httpConfig.handleError );
  }

  getSurveyData() {
    return this.http.get( this.httpConfig.backend_url + "/api/survey", { withCredentials: true } )
      .map( ( response: Response ) => response.json() ).catch( this.httpConfig.handleError );
  }

  sendBookData( data: any ) {
    return this.http.post( this.httpConfig.backend_url + "/api/book", this.httpConfig.urlEncode( data ), { headers: this.httpConfig.headers, withCredentials: true } )
      .map( ( data: Response ) => data ).catch( this.httpConfig.handleError );
  }

  sendSurveyData( data: any ) {
    return this.http.post( this.httpConfig.backend_url + "/api/survey", this.httpConfig.urlEncode( data ), { headers: this.httpConfig.headers, withCredentials: true } )
      .map( ( data: Response ) => data ).catch( this.httpConfig.handleError );
  }

}
