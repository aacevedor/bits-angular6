import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from '../logger.service';
import { AuthenticationService } from './authentication.service';

import { Globals } from '../../globals';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private globals:Globals) { }

  // canActivate(): boolean {
  //   if (this.authenticationService.isAuthenticated()) {
  //     return true;
  //   }
  //
  //   log.debug('Not authenticated, redirecting...');
  //   this.router.navigate(['/login'], { replaceUrl: true });
  //   return false;
  // }

  canActivate():boolean{
    if(this.globals.authorization != null){
      return true
    }
    log.debug('Spotify token not valid, redirecting');
    this.router.navigate(['/home'], { replaceUrl: true });
    return false;
  }

}
