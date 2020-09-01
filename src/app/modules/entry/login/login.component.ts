import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public step = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}
