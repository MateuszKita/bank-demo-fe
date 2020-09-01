import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bd-login-step-one',
  templateUrl: './login-step-one.component.html',
  styleUrls: ['./login-step-one.component.scss']
})
export class LoginStepOneComponent implements OnInit {

  @Output() next: EventEmitter<string> = new EventEmitter<string>();

  public login: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
