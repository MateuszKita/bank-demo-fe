import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RegisteredUser} from "../../../../shared/models/user.model";
import {UsersService} from "../../../../shared/services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bd-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  public user$: Observable<RegisteredUser>

  constructor(
    private readonly userService: UsersService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.currentUser$;
  }

  back(): void {
    this.router.navigate(['account', 'dashboard'])
  }

}
