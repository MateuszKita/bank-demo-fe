import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'bd-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss']
})
export class RegisterStepTwoComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
