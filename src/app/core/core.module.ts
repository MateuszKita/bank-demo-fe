import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {AuthInterceptorService} from "./interceptors/auth-interceptor/auth-interceptor.service";
import {SecurityService} from "./services/security/security.service";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthInterceptorService,
    SecurityService
  ]
})
export class CoreModule {
}
