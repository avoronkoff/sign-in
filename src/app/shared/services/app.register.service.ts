import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/app.user.interface';
import { Info } from '../interfaces/app.info.interface';

const users = [
  new User('test', 'test', 'test', '123456')
];

@Injectable()
export default class AppRegisterService {
  info: Info = { register : localStorage.register };
  constructor(
    private _router: Router) {}

  logout() {
    this.removeStorage();
    this.info.register = false;
    this._router.navigate(['register']);
  }

  login(user) {
    const authenticatedUser = users.find(u => u.password === user.password);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      this.setStorage(authenticatedUser);
      this._router.navigate(['/user']);
      this.info.register = localStorage.register;

      return true;
    }
    return false;
  }

  setStorage(authenticate): void {
    localStorage.setItem('user', authenticate.toString());
    localStorage.setItem('register', 'true');
  }

  removeStorage(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('register');
  }
}
