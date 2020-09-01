import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public personalDataGroup: FormGroup = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(3)]],
    lastName: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  })

  public additionalInfoGroup: FormGroup = this.fb.group({
    dateOfBirth: ["", [Validators.required, Validators.minLength(3)]],
    address: this.fb.group({
      postalCode: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      city: ["", [Validators.required, Validators.minLength(3)]],
      street: ["", [Validators.required, Validators.minLength(3)]]
    }),
    parentsNames: this.fb.group({
      mother: ["", [Validators.required, Validators.minLength(3)]],
      father: ["", [Validators.required, Validators.minLength(3)]]
    }),
  })

  public step: number = 0;

  constructor(
    private readonly fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

}
