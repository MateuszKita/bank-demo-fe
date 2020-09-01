import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntryRoutingModule} from './entry-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AdvertisementComponent],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule {
}
