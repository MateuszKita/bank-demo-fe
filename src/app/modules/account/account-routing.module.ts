import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from "./views/account.component";
import {AccountDashboardComponent} from "./views/account-dashboard/account-dashboard.component";
import {AccountTransferComponent} from "./views/account-transfer/account-transfer.component";
import {AccountHistoryComponent} from "./views/account-history/account-history.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'dashboard',
        component: AccountDashboardComponent
      },
      {
        path: 'transfer',
        component: AccountTransferComponent
      },
      {
        path: 'history',
        component: AccountHistoryComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
