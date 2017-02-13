import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }

  getType() {
    return parseInt(decodeURIComponent(document.cookie).split(';').pop()[1]);
  }

  getId() {
    return decodeURIComponent(document.cookie).split(';').pop().substring(2);
  }

  checkAdmin() {
    if (this.checkUser() && this.getType() == 0 && this.getId() == 'admin') {
      return true;
    }
    else {
      return false;
    }
  }

  checkTeacher() {
    if (this.checkUser() && this.getType() <= 1) {
      return true;
    }
    else {
      return false;
    }
  }

  checkAuth() {
    if (this.checkUser() && this.getType() <= 2) {
      return true;
    }
    else {
      return false;
    }
  }

  checkUser() {
    if (this.getId() == 'undefined' || this.getId() == '') {
      return false;
    }
    else {
      return true;
    }
  }

  setCookie(val: string) {
    document.cookie = val;
  }

}
