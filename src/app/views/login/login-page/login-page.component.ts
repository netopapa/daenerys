import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials, SecurityService } from '../../../providers/services/security.service';

// email: 'eve.holt@reqres.in',
// password: 'askasoasj'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public user: Credentials = {email: 'eve.holt@reqres.in', password: 'asasasas'};

  constructor(
    private security: SecurityService,
    private router: Router
  ) { }

  public login(): void {
    this.security.login(this.user).subscribe(
      success => {
        localStorage.setItem('token', success.token);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      }
    );
  }

}
