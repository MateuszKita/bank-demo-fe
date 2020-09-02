import {Component, OnDestroy, OnInit} from '@angular/core';
import {TransfersService} from "../../services/transfers.service";
import {Transfer} from "../../services/transfer.model";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'bd-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss']
})
export class AccountHistoryComponent implements OnInit, OnDestroy {

  private readonly onDestroy$: Subject<null> = new Subject()

  public transfers: Transfer[] = [];

  constructor(
    private readonly transfersService: TransfersService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.transfersService.getTransfersHistory()
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(transfers => this.transfers = transfers)
  }

  back(): void {
    this.router.navigate(['account', 'dashboard'])
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
