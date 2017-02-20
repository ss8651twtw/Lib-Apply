import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() {
  }

  getType(type: string) {
    //return decodeURIComponent( document.cookie ).includes('Type=' + type);
    return true;
  }

  checkAdmin() {
    return this.checkUser() && this.getType('Admin');
  }

  checkTeacher() {
    return this.checkUser() && this.getType('Teacher');
  }

  checkAuth() {
    return this.checkUser() && this.getType('Auth');
  }

  checkUser() {
    return decodeURIComponent( document.cookie ).includes('user=');
  }

  setCookie( val: string ) {
    document.cookie = val;
  }

}
