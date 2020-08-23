import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_API_URL } from '../../constants/api.constants';
import { RestService } from './base/rest-service';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService extends RestService {

  constructor(
    http: HttpClient,
    private router: Router) {
    super(http);
  }

  public login(credentials: Credentials): Observable<any> {
    return this.post(AUTH_API_URL, credentials);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  public goHome(): void {
    this.router.navigate(['/']);
  }
}
