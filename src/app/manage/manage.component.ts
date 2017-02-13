import {Component, OnInit, DoCheck} from '@angular/core';
import {CookieService} from "../cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit, DoCheck {

  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.cookie.checkValid() == false || this.cookie.checkAdmin()) {
      this.router.navigate(['login']);
    }
  }

}