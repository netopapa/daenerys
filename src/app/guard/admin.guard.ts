import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { SecurityService } from '../providers/services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private security: SecurityService) { }

  canLoad(): boolean {
    if (this.security.isAuthenticated()) {
      return true;
    } else {
      this.security.logout();
    }
  }

}
