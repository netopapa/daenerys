import { Component } from '@angular/core';
import { Credentials, SecurityService } from '../../../providers/services/security.service';
import { NotifyService, NotifyType } from 'src/app/shared/notify/notify.service';

// email: 'eve.holt@reqres.in',
// password: 'askasoasj'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public user: Credentials = { email: 'eve.holt@reqres.in', password: 'asasasas' };
  public emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(
    private security: SecurityService,
    private notify: NotifyService
  ) { }

  public login(): void {
    this.security.login(this.user).subscribe(
      success => {
        localStorage.setItem('token', success.token);
        this.security.goHome();
      },
      error => {
        console.log(error);
        this.notify.toast(NotifyType.ERROR, error.error?.error || 'Something is wrong :(');
      }
    );
  }

}
