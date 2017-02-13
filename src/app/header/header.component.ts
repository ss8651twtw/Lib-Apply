import {Component, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  constructor(private cookie: CookieService) { }

  logstatus: boolean;

  ngDoCheck() {
    if (this.cookie.getCookie() == 'undefined' || this.cookie.getCookie() == '') {
      this.logstatus = false;
    }
    else {
      this.logstatus = true;
    }
  }

  onClicked() {
    this.cookie.setCookie('');
  }

}
