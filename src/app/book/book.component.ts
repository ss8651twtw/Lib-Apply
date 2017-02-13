import {Component, OnInit, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements DoCheck {

  constructor(private cookie: CookieService, private router: Router) { }

  ngDoCheck() {
    if (this.cookie.checkTeacher() == false) {
      alert('進不去QQ');
      this.router.navigate(['']);
    }
  }

  onSubmitted(form: NgForm) {
    console.log(form['value']);
  }

}
