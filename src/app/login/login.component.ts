import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    if (this.userId == 'auth' && this.userPwd == 'auth') {
      this.cookie.setCookie('2' + this.userId);
      this.router.navigate(['']);
    }
    else if (this.userId == 'teacher' && this.userPwd == 'teacher') {
      this.cookie.setCookie('1' + this.userId);
      this.router.navigate(['']);
    }
    else if (this.userId == 'admin' && this.userPwd == 'admin') {
      this.cookie.setCookie('0' + this.userId);
      this.router.navigate(['']);
    }
    else {
      alert('進不去QQ');
    }
  }

}
