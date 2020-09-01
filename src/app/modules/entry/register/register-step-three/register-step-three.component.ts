import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bd-register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.scss']
})
export class RegisterStepThreeComponent implements OnInit {

  @Input() newLogin: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
