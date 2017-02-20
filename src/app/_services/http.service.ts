import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

  localhost: string = "http://127.0.0.1";
  frozenkp: string = "http://frozenkp.com.tw";
  backend_domain: string = this.frozenkp;
  backend_port: string = "8000";

  constructor( private http: Http ) { }

  urlEncode( data: Object ) {
    let answer: string = "";
    for ( let key in data ) {
      answer += key + "=" + data[ key ] + "&";
    }
    return answer.slice( 0, -1 );
  }

  checkUser( userid ) {
    return this.http.get( this.backend_domain + ':' + this.backend_port + "/api/checkUser" + userid )
      .map( ( response: Response ) => JSON.parse( response["_body"] ) ).catch( this.handleError );
  }

  checkAuth( data: any ) {
    const headers = new Headers( { "Content-Type": "application/x-www-form-urlencoded" } );
    return this.http.post( this.backend_domain + ':' + this.backend_port + "/api/checkAuth", this.urlEncode( data ), { headers: headers } )
      .map( ( data: Response ) => data ).catch( this.handleError );
  }

  getBookData() {
    return this.http.get( this.backend_domain + ':' + this.backend_port + "/api/book" )
      .map( ( response: Response ) => response.json() ).catch( this.handleError );
  }

  getSurveyData() {
    return this.http.get( this.backend_domain + ':' + this.backend_port + "/api/survey" )
      .map( ( response: Response ) => response.json() ).catch( this.handleError );
  }

  sendBookData( data: any ) {
    const headers = new Headers( { "Content-Type": "application/x-www-form-urlencoded" } );
    return this.http.post( this.backend_domain + ':' + this.backend_port + "/api/book", this.urlEncode( data ), { headers: headers } )
      .map( ( data: Response ) => data ).catch( this.handleError );
  }

  sendSurveyData( data: any ) {
    const headers = new Headers( { "Content-Type": "application/x-www-form-urlencoded" } );
    return this.http.post( this.backend_domain + ':' + this.backend_port + "/api/survey", this.urlEncode( data ), { headers: headers } )
      .map( ( data: Response ) => data ).catch( this.handleError );
  }

  private handleError( error: Response ) {
    console.log( error );
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw( message );
  }
}
