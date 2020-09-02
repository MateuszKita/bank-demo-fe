import {Component, OnInit} from '@angular/core';
import {RegisteredUser} from "../../../../shared/models/user.model";
import {Router} from "@angular/router";
import {TransfersService} from "../../services/transfers.service";

@Component({
  selector: 'bd-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {

  public user: RegisteredUser

  constructor(
    private readonly router: Router,
    private readonly transfersService: TransfersService
  ) {
  }

  ngOnInit(): void {
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
