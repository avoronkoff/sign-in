import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './main/app.component';
import { AppRegisterComponent } from './register/app.register.component';
import { AppUserComponent } from './user/app.user.component';
import { AppRoutingModule } from './app.routing.module';
import { ApppNavbarComponent } from './navbar/app.navbar.component';

import { AppRegisterService } from './shared/shared';

@NgModule({
  declarations: [
    AppComponent,
    AppRegisterComponent,
    AppUserComponent,
    ApppNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AppRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
