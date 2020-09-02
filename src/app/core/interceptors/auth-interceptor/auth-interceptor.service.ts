import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SecurityService} from '../../services/security/security.service';
import {Router} from '@angular/router';
import {environment} from "../../../../environments/environment";
import {StatusCodes} from "http-status-codes";
import {catchError} from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private readonly securityService: SecurityService,
    private readonly router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.securityService.getToken();
    const headers: any = (req.method === 'POST' && req.url.includes(environment.apiUrl + 'users'))
    || req.url.includes(environment.apiUrl + 'users/login')
    || req.url.includes(environment.apiUrl + 'users/register')
      ? {}
      : {Authorization: 'Bearer ' + this.securityService.getToken()};

    const authRequest = req.clone({
      setHeaders: headers
    });

    return next.handle(authRequest)
      .pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === StatusCodes.UNAUTHORIZED) {
            this.router.navigate(['entry', 'login']);
          }
          throw error;
        })
      );
  }
}
