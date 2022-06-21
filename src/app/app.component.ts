import {Component} from '@angular/core';
import {AuthenticationService} from "./security/authentication.service";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rental Shop';
  currentLanguage: string | undefined;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router) {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']).then();
  }

}
