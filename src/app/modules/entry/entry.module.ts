import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntryRoutingModule} from './entry-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdvertisementComponent} from './advertisement/advertisement.component';
import {EntryComponent} from './entry.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AdvertisementComponent, EntryComponent],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule {
}
