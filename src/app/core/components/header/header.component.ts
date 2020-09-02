import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'bd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public burgerMenuIsActive: boolean = false;


  constructor(
    private readonly translate: TranslateService
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }

  useLang(language: string): void {
    this.translate.use(language);
  }

}
