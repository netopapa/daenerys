import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonsModule } from '../dragons.module';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragonsModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize dragons with 0', () => {
    expect(component.dragons.length).toBe(0);
  });

  it('should show current list size', () => {
    const tagContainer: HTMLElement = fixture.debugElement.query(By.css('.list-header h5')).nativeElement;
    fixture.detectChanges();
    expect(tagContainer.textContent).toBe('Dragons (0)');
  });
});
