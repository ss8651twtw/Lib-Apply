import {Component, OnInit, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpService} from "../http.service"

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [HttpService]
})
export class BookComponent implements DoCheck {

  constructor(private http: HttpService, private cookie: CookieService, private router: Router) { }

  ngDoCheck() {
    if (this.cookie.checkTeacher() == false) {
      alert('進不去QQ');
      this.router.navigate(['']);
    }
  }

  onSubmitted(form: NgForm) {
    var response = this.http.sendBookData(form['value']).subscribe();
    console.log(response);
  }

}
