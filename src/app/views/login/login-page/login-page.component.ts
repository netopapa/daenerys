import { Component } from '@angular/core';
import { Credentials, SecurityService } from '../../../providers/services/security.service';
import { MainLoadingService } from '../../../shared/main-loading/main-loading.service';

// email: 'eve.holt@reqres.in',
// password: 'askasoasj'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public user: Credentials = { email: 'eve.holt@reqres.in', password: 'asasasas' };

  constructor(
    private security: SecurityService
  ) { }

  public login(): void {
    MainLoadingService.show();
    this.security.login(this.user).subscribe(
      success => {
        localStorage.setItem('token', success.token);
        this.security.goHome();
        MainLoadingService.hide();
      },
      error => {
        console.error(error);
        MainLoadingService.hide();
      }
    );
  }

}
