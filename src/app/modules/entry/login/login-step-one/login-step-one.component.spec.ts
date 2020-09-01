import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStepOneComponent } from './login-step-one.component';

describe('LoginStepOneComponent', () => {
  let component: LoginStepOneComponent;
  let fixture: ComponentFixture<LoginStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
