import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cookie: CookieService, private router: Router) { }

  private userId: string;
  private userPwd: string;

  ngOnInit() {
  }

  onSubmitted(form: NgForm) {
    this.userId = form['value']['userid'];
    this.userPwd = form['value']['userpwd'];
    if (this.userId == 'haha' && this.userPwd == 'haha') {
      this.cookie.setCookie(this.userId);
      this.router.navigate(['']);
    }
    else {
      alert('進不去QQ');
    }
  }

}
