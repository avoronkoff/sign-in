import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AppRegisterService } from '../shared/shared';

@Component({
  selector: 'app-register',
  templateUrl: './app.register.component.html',
  styleUrls: ['./app.register.component.css']
})
export class AppRegisterComponent {
  complexForm: FormGroup;

  constructor(private appRegisterService: AppRegisterService,
              fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'userName' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
    });
  }

  register(value: any): void {
    this.appRegisterService.login(value);
  }
}
