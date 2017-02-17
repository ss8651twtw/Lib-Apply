import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getBookData() {
    return this.http.get("http://frozenkp.com.tw:8000/api/book")
      .map((response: Response) => response.json());
  }

  getSurveyData() {
    return this.http.get("http://frozenkp.com.tw:8000/api/survey")
      .map((response: Response) => response.json());
  }

  sendBookData(data: any) {
    const postdata = JSON.stringify(data);
    return this.http.post("http://frozenkp.com.tw:8000/api/book", postdata);
  }

  sendSurveyData(data: any) {
    const postdata = JSON.stringify(data);
    return this.http.post("http://frozenkp.com.tw:8000/api/survey", postdata);
  }
}
