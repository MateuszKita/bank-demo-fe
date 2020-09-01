import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public step = 0;
  public login: string;
  public enabledIndexes: number[] = [];

  constructor() {
  }

  useLoginToGetLoginData(login: string): void {
    this.login = login;
  }

  loginToAccount(password: string[]): void {
    console.log(password)
  }

  ngOnInit(): void {
  }

}
