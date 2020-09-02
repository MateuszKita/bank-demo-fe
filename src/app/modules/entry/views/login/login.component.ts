import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'bd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private readonly onDestroy$: Subject<null> = new Subject()

  public step = 0;
  public login: string;
  public enabledIndexes: number[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.setLoginFromQueryParams();
  }

  private setLoginFromQueryParams(): void {
    const loginFromQueryParam: string = this.route.snapshot.queryParams?.login;
    if (loginFromQueryParam) {
      this.login = loginFromQueryParam;
    }
  }

  navigateToCreateAccount(): void {
    this.router.navigate(['register']);
  }

  useLoginToGetLoginData(login: string): void {
    this.login = login;
    this.usersService.getLoginData(login)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(value => {
        this.enabledIndexes = value.indexesForMask;
      })
  }

  loginToAccount(password: string[]): void {
    this.usersService.login(this.login, password)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        this.router.navigate(['account']);
      })
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
