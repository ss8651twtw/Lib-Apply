import {Injectable} from '@angular/core';

@Injectable()
export class CookieService {

  constructor() {
  }

  getType() {
    return parseInt(decodeURIComponent(document.cookie).split(';').pop()[1]);
  }

  getId() {
    return decodeURIComponent(document.cookie).split(';').pop().substring(2);
  }

  checkAdmin() {
    return this.checkUser() && this.getType() == 0 && this.getId() == 'admin';
  }

  checkTeacher() {
    return this.checkUser() && this.getType() <= 1;
  }

  checkAuth() {
    return this.checkUser() && this.getType() <= 2;
  }

  checkUser() {
    return !(this.getId() == 'undefined' || this.getId() == '');
  }

  setCookie(val: string) {
    document.cookie = val;
  }

}
