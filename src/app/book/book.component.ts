import {Component, OnInit, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements DoCheck {

  constructor(private cookie: CookieService, private router: Router) { }

  ngDoCheck() {
    if (this.cookie.checkValid() == false) {
      this.router.navigate(['login']);
    }
  }

}
