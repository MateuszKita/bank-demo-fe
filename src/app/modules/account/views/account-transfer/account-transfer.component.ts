import {Component, OnDestroy, OnInit} from '@angular/core';
import {TransfersService} from "../../services/transfers.service";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'bd-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.scss']
})
export class AccountTransferComponent implements OnInit, OnDestroy {

  private readonly onDestroy$: Subject<null> = new Subject()

  public transferDataForm: FormGroup = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(3)]],
    amount: ["", [Validators.required]],
    recipientData: this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      accountNumber: ["", [Validators.required]],
      address: this.fb.group({
        postalCode: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        city: ["", [Validators.required, Validators.minLength(3)]],
        street: ["", [Validators.required, Validators.minLength(3)]]
      })
    })
  })

  constructor(
    private readonly transfersService: TransfersService,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['account', 'dashboard'])
  }

  transferMoney(): void {
    this.transfersService.newTransfer(this.transferDataForm.value)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        this.back();
      })
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
