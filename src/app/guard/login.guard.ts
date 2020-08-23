import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../providers/services/security.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(private security: SecurityService) { }

  canLoad(): boolean {
    if (!this.security.isAuthenticated()) {
      return true;
    } else {
      this.security.goHome();
    }
  }

}
