import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public burgerMenuIsActive: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
