import { Component } from '@angular/core';
import { AppRegisterService } from '../shared/shared';
import { Info } from '../shared/services/app.register.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})

export class ApppNavbarComponent {
  info: Info;
  constructor(private appRegisterService: AppRegisterService) {
    this.info = this.appRegisterService.info;
  }
  logout(): void {
    this.appRegisterService.logout();
  }
}
