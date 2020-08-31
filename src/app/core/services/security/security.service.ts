import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from "../../../../environments/environment";
import {User, UserLoginData} from "../../../shared/models/user.model";
import {LOGIN_URL, REGISTER_URL, USERS_URL} from "../../common.constants";

@Injectable()
export class SecurityService {

  private token: string;
  private apiUrl: string = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
  }

  getToken(): string {
    const token: any = JSON.parse(sessionStorage.getItem('token'));
    if (token) {
      this.token = token;
    } else if (this.router.url !== LOGIN_URL && this.router.url !== REGISTER_URL) {
      this.router.navigate(['/login']);
    }
    return this.token;
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  login(body: UserLoginData): Observable<string> {
    return this.http.post<any>(this.apiUrl + 'users/login', body);
  }

  register(body: User): Observable<any> {
    const registerData: any = {
      password: body.password,
    };
    return this.http.post<any>(`${this.apiUrl}${USERS_URL}`, registerData);
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'users/logout', null);
  }
}
