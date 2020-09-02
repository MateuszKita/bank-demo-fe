import {Component, OnInit} from '@angular/core';
import {RegisteredUser} from "../../../../shared/models/user.model";
import {Router} from "@angular/router";
import {UsersService} from "../../../../shared/services/users.service";
import {Observable} from "rxjs";

@Component({
  selector: 'bd-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {

  public user$: Observable<RegisteredUser>

  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.user$ = this.usersService.currentUser$;
  }

  onAccountDetailsClick(): void {
    this.router.navigate(['account', 'details'])
  }

  onTransfersHistoryClick(): void {
    this.router.navigate(['account', 'history'])
  }

  onTransferClick(): void {
    this.router.navigate(['account', 'transfer'])
  }

}
