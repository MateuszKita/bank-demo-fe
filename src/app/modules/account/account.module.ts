import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import { AccountComponent } from './views/account.component';
import { AccountDashboardComponent } from './views/account-dashboard/account-dashboard.component';
import { AccountTransferComponent } from './views/account-transfer/account-transfer.component';
import { AccountHistoryComponent } from './views/account-history/account-history.component';

@NgModule({
  declarations: [AccountComponent, AccountDashboardComponent, AccountTransferComponent, AccountHistoryComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule {
}
