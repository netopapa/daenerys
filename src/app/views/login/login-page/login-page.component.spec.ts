import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginModule } from '../login.module';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let inputEmail: HTMLInputElement;
  let inputPass: HTMLInputElement;
  let buttonSbt: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputEmail = fixture.debugElement.query(By.css('input[name=email]')).nativeElement;
    inputPass = fixture.debugElement.query(By.css('input[name=password]')).nativeElement;
    buttonSbt = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate user', () => {
    expect(component.user).toBeTruthy();
  });

  it('should not disable button', () => {
    inputEmail.value = 'email@email.com';
    inputPass.value = '123';
    inputEmail.dispatchEvent(new Event('input'));
    inputPass.dispatchEvent(new Event('input'));

    expect(buttonSbt.disabled).toBeFalse();
  });
});
