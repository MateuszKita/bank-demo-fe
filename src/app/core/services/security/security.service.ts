import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LOGIN_URL, REGISTER_URL} from "../../common.constants";

@Injectable()
export class SecurityService {

  private token: string;

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
      this.router.navigate(['entry', 'login']);
    }
    return this.token;
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

}
