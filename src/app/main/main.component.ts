import { Component } from '@angular/core';
import { CookieService } from "../_services/cookie.service";

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
} )
export class MainComponent {

  constructor( private cookie: CookieService ) { }

}
