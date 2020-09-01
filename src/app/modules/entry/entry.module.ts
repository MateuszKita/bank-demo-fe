import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntryRoutingModule} from './entry-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdvertisementComponent} from './login/advertisement/advertisement.component';
import {EntryComponent} from './entry.component';
import {LoginStepOneComponent} from './login/login-step-one/login-step-one.component';
import {LoginStepTwoComponent} from './login/login-step-two/login-step-two.component';
import {MaskedPasswordComponent} from './login/login-step-two/masked-password/masked-password.component';
import {RegisterStepOneComponent} from './register/register-step-one/register-step-one.component';
import {RegisterStepTwoComponent} from './register/register-step-two/register-step-two.component';
import {RegisterStepThreeComponent} from './register/register-step-three/register-step-three.component';
import {FormsModule} from "@angular/forms";

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
    FormsModule
  ]
})
export class EntryModule {
}
