import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRegisterComponent } from './register/app.register.component';
import { AppUserComponent } from './user/app.user.component';


const routes: Routes = [
  { path: 'register',  component: AppRegisterComponent },
  { path: 'user', component: AppUserComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
