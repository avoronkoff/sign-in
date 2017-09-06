import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './app.register.component.html',
  styleUrls: ['./app.register.component.css']
})
export class AppRegisterComponent {
  complexForm: FormGroup;

  constructor(fb: FormBuilder,
              private router: Router) {
    this.complexForm = fb.group({
      'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'userName' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
    });
  }

  register(value: any): void {
    console.log(value);
    // this.registerService.create(value)
    //   .subscribe(
    //     () => {
    //       this.router.navigate(['/login']);
    //     },
    //     error => {
    //       console.log('error');
    //     });
  }
}
