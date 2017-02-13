import {Component, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  constructor(private cookie: CookieService) { }

  login: boolean = false;
  admin: boolean = false;

  ngDoCheck() {
    if (this.cookie.checkUser()) {
      this.login = true;
      if (this.cookie.checkAdmin()) {
        this.admin = true;
      }
    }
  }

  onClicked() {
    this.cookie.setCookie('');
    this.login = false;
    this.admin = false;
  }

}
