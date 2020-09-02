import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {AuthInterceptorService} from "./interceptors/auth-interceptor/auth-interceptor.service";
import {SecurityService} from "./services/security/security.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthInterceptorService,
    SecurityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {
}
