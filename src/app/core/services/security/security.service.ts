import {Injectable} from '@angular/core';

@Injectable()
export class SecurityService {

  private token: string;

  getToken(): string {
    const token: any = JSON.parse(sessionStorage.getItem('token'));
    if (token) {
      this.token = token;
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
