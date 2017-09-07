import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public userName: string,
    public password: string) { }
}

const users = [
  new User('test', 'test', 'test', '123456')
];

export interface Info {
  register: boolean;
}

@Injectable()
export default class AppRegisterService {
  info: Info = { register : localStorage.register };
  constructor(
    private _router: Router) {}

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('register');
    this.info.register = false;
    this._router.navigate(['register']);
  }

  login(user) {
    const authenticatedUser = users.find(u => u.password === user.password);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('user', authenticatedUser.toString());
      localStorage.setItem('register', 'true');
      this._router.navigate(['/user']);
      this.info.register = localStorage.register;
      return true;
    }
    return false;

  }
}
