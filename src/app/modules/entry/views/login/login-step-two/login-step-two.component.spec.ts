import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginStepTwoComponent} from './login-step-two.component';

describe('LoginStepTwoComponent', () => {
  let component: LoginStepTwoComponent;
  let fixture: ComponentFixture<LoginStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginStepTwoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
