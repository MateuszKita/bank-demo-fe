import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../../shared/services/users.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'bd-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  private readonly onDestroy$: Subject<null> = new Subject()

  constructor(
    private readonly usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersService.getCurrentUserData()
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(user => this.usersService.currentUser$.next(user));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
