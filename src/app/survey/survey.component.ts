import {Component, OnInit, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements DoCheck {

  constructor(private cookie: CookieService, private router: Router) { }

  ngDoCheck() {
    if (this.cookie.checkValid() == false) {
      this.router.navigate(['login']);
    }
  }

}
