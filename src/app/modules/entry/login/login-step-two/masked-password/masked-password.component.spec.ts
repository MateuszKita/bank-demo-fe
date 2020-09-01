import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MaskedPasswordComponent} from './masked-password.component';

describe('MaskedPasswordComponent', () => {
  let component: MaskedPasswordComponent;
  let fixture: ComponentFixture<MaskedPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaskedPasswordComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskedPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
