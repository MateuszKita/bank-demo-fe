import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntryRoutingModule} from './entry-routing.module';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {AdvertisementComponent} from './views/login/advertisement/advertisement.component';
import {EntryComponent} from './views/entry.component';
import {LoginStepOneComponent} from './views/login/login-step-one/login-step-one.component';
import {LoginStepTwoComponent} from './views/login/login-step-two/login-step-two.component';
import {MaskedPasswordComponent} from './views/login/login-step-two/masked-password/masked-password.component';
import {RegisterStepOneComponent} from './views/register/register-step-one/register-step-one.component';
import {RegisterStepTwoComponent} from './views/register/register-step-two/register-step-two.component';
import {RegisterStepThreeComponent} from './views/register/register-step-three/register-step-three.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdvertisementComponent,
    EntryComponent,
    LoginStepOneComponent,
    LoginStepTwoComponent,
    MaskedPasswordComponent,
    RegisterStepOneComponent,
    RegisterStepTwoComponent,
    RegisterStepThreeComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class EntryModule {
}
