import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptorService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xrsf_token = this.localStorageService.get(environment.localStorage.xrsf_token);
    const falcon_token = this.localStorageService.get(environment.localStorage.falcon_token);
    console.log('----------------', xrsf_token, falcon_token, '----------------');
    let header = req.headers;
    if (xrsf_token) {
      header = header.set('X-XSRF-TOKEN', xrsf_token ? '' + xrsf_token.toString() : '');
    }
    if (falcon_token) {
      header = header.set('X-FALCON-TOKEN', falcon_token ? '' + falcon_token.toString() : '')
    }
    const duplicate = req.clone({headers: header});
    return next.handle(duplicate);
  }
}
