import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  login(email, password, captcha) {
    const body = {
      username: email,
      password_md5: password,
      captcha: captcha
    };
    return this.http.post(`${environment.apiUrl}system.user.login`, body, {observe: 'response'}).map((x: any) => {
      const falcon = x.headers.get('X-FALCON-TOKEN');
      const xrsf = x.headers.get('X-XSRF-TOKEN');
      this.localStorageService.set(environment.localStorage.falcon_token, falcon);
      this.localStorageService.set(environment.localStorage.xrsf_token, xrsf);
      return {success: true}
    })
  }

  getUser() {
    return this.http.get(`${environment.apiUrl}system.user.status`);
  }

}
