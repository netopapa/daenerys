import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragonsModule } from '../dragons.module';
import { FormComponent } from './form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { By } from '@angular/platform-browser';


describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragonsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1'
              })
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate dragon', () => {
    expect(component.dragon).toBeTruthy();
  });

  it('should be edit mode', (done) => {
    component.ngOnInit();

    fixture.whenStable().then(() => {
      expect(component.edit).toBeTrue();
      done();
    });
  });

  it('should show edition title', () => {
    const tagContainer: HTMLElement = fixture.debugElement.query(By.css('.form-header h5')).nativeElement;
    fixture.detectChanges();
    expect(tagContainer.textContent).toBe('Edit dragon');
  });
});
