import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'entry',
    loadChildren: () => import('./modules/entry/entry.module').then(module => module.EntryModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(module => module.AccountModule)
  },
  {
    path: '**',
    redirectTo: 'entry'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
