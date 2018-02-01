import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  canActivate() {
    const xrsf_token = this.localStorageService.get(environment.localStorage.xrsf_token);
    const falcon_token = this.localStorageService.get(environment.localStorage.falcon_token);

    if ( xrsf_token && falcon_token ) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
