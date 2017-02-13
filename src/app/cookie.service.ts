import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }

  getCookie() {
    return decodeURIComponent(document.cookie).split(';').pop().substring(1);
  }

  setCookie(val: string) {
    document.cookie = val;
  }

  checkValid() {
    if (this.getCookie() == 'undefined' || this.getCookie() == '') {
      return false;
    }
    else {
      return true;
    }
  }

}
