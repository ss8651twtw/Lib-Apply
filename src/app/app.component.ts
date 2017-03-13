import { Component, DoCheck } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { CookieService } from "./_services/cookie.service";

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  host: { class: 'sticky-wrapper' }
} )
export class AppComponent implements DoCheck {

  constructor( private translate: TranslateService, private cookie: CookieService ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang( 'chinese' );
    const nowLang = cookie.getCookie( "language" );
    if ( !nowLang ) document.cookie = "language=chinese";
  }

  ngDoCheck() {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use( this.cookie.getCookie("language") );
  }

}
