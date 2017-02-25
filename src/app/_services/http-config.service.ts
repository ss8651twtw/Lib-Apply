import { Injectable } from '@angular/core';
import { Response, Headers } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpConfigService {

  localhost: string = "http://127.0.0.1";
  frozenkp: string = "http://140.113.37.211";
  backend_domain: string = this.frozenkp;
  backend_port: string = "8000";

  headers = new Headers( { "Content-Type": "application/x-www-form-urlencoded" } );

  urlEncode( data: Object ) {
    let answer: string = "";
    for ( let key in data ) {
      answer += key + "=" + data[ key ] + "&";
    }
    return answer.slice( 0, -1 );
  }

  handleError( error: Response ) {
    console.log( error );
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw( message );
  }
}
