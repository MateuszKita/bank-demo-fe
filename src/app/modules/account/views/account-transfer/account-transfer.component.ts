import {Component, OnInit} from '@angular/core';
import {TransfersService} from "../../services/transfers.service";

@Component({
  selector: 'bd-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.scss']
})
export class AccountTransferComponent implements OnInit {

  constructor(
    private readonly transfersService: TransfersService
  ) {
  }

  ngOnInit(): void {
  }

}
