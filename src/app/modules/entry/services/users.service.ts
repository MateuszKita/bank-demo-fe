import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../shared/models/user.model";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {SecurityService} from "../../../core/services/security/security.service";
import {tap} from "rxjs/operators";

@Injectable()
export class UsersService {

  private readonly usersUrl: string = `${environment.apiUrl}users/`

  constructor(
    private readonly httpClient: HttpClient,
    private readonly securityService: SecurityService
  ) {
  }

  createUser(userData: User): Observable<{ login: string }> {
    return this.httpClient.post<{ login: string }>(this.usersUrl, userData);
  }

  getLoginData(login: string): Observable<{ indexesForMask: number[] }> {
    return this.httpClient.get<{ indexesForMask: number[] }>(`${this.usersUrl}login/${login}`);
  }

  login(login: string, password: string[]): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(`${this.usersUrl}login/`, {login, password})
      .pipe(
        tap(res => this.securityService.setToken(res.token))
      )
  }

}
