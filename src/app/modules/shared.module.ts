import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersService} from "../shared/services/users.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UsersService
  ]
})
export class SharedModule {
}
