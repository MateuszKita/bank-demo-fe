import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public step: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
