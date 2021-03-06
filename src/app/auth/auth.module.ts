import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { MaterialModule } from '../shared/material/material.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReCaptchaModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
