import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegistrationComponent]
})
export class AuthenticationModule { }
