import {Component, OnInit, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit, DoCheck {

  constructor(private cookie: CookieService, private router: Router) { }

  applydate: string

  ngOnInit() {
    var dd = new Date();
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    this.applydate = y + '-' + m + '-' + d;
  }

  ngDoCheck() {
    if (this.cookie.checkAuth() == false) {
      alert('進不去QQ');
      this.router.navigate(['']);
    }
  }

  onSubmitted(form: NgForm) {
    console.log(form['value']);
  }

}
