import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bd-login-step-two',
  templateUrl: './login-step-two.component.html',
  styleUrls: ['./login-step-two.component.scss']
})
export class LoginStepTwoComponent implements OnInit {

  @Output() previous: EventEmitter<void> = new EventEmitter<void>();
  @Output() next: EventEmitter<string[]> = new EventEmitter<string[]>();

  public password: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
