import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

  domain: string = "http://127.0.0.1";
  port: string = "8000";

  constructor( private http: Http ) {
  }

  getBookData() {
    return this.http.get( this.domain + ':' + this.port + "/api/book" )
      .map( ( response: Response ) => response.json() );
  }

  getSurveyData() {
    return this.http.get( this.domain + ':' + this.port + "/api/survey" )
      .map( ( response: Response ) => response.json() );
  }

  sendBookData( data: any ) {
    const postdata = JSON.stringify( data );
    const headers = new Headers( { 'Content-Type': 'application/json' } );
    return this.http.post( this.domain + ':' + this.port + "/api/book", postdata, headers ).map( ( data: Response ) => data.json() ).catch( this.handleError );
  }

  sendSurveyData( data: any ) {
    const postdata = JSON.stringify( data );
    const headers = new Headers( { 'Content-Type': 'application/json' } );
    return this.http.post( this.domain + ':' + this.port + "/api/survey", postdata, headers ).map( ( data: Response ) => data.json() ).catch( this.handleError );
  }

  private handleError( error: Response ) {
    console.log( error );
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw( message );
  }
}
