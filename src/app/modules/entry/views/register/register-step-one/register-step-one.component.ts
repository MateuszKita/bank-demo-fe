import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'bd-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss']
})
export class RegisterStepOneComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
