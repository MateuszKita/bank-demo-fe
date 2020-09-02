import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './views/account.component';
import {AccountDashboardComponent} from './views/account-dashboard/account-dashboard.component';
import {AccountTransferComponent} from './views/account-transfer/account-transfer.component';
import {AccountHistoryComponent} from './views/account-history/account-history.component';
import {AccountDetailsComponent} from './views/account-details/account-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AccountComponent, AccountDashboardComponent, AccountTransferComponent, AccountHistoryComponent, AccountDetailsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule {
}
