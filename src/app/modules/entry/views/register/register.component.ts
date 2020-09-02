import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../../shared/services/users.service";
import {User} from "../../../../shared/models/user.model";
import {Subject} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'bd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

  private readonly onDestroy$: Subject<null> = new Subject()

  public login: string;
  public step: number = 0;

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

  constructor(
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {
  }

  private createRegisterData(): User {
    return {
      ...this.personalDataGroup.value,
      ...this.additionalInfoGroup.value,
      password: this.personalDataGroup.value.password.split('')
    }
  }

  register(): void {
    this.usersService.createUser(this.createRegisterData())
      .pipe(
        map(data => data.login),
        takeUntil(this.onDestroy$)
      )
      .subscribe(login => {
        this.login = login;
        this.step = 2;
      }, err => {
        console.error(err);
      })
  }

  navigateToLogin(): void {
    this.router.navigate(['entry', 'login'], {queryParams: {login: this.login}})
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
