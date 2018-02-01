import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5'
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(ReCaptchaComponent) captchaEl: ReCaptchaComponent;

  email = '';
  password = '';
  captcha = '';
  googleSiteKey = environment.siteKey;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.snackBar.dismiss();
    try {
      this.isLoading = true;
      const res: any = await this.authService.login(this.email, Md5.hashStr(this.password), this.captcha).toPromise();
      if (res.success) {
        this.router.navigate(['/main']);
      }
    } catch (e) {
      this.snackBar.open('Can not find matched login.');
    } finally {
      this.captchaEl.reset();
      this.isLoading = false;
    }
  }

  handleCorrectCaptcha(e) {
    this.captcha = e;
  }

}
