import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { SignUpService } from '../sign-up.service'
import { StateManagementService } from "../state-management.service";
import { GetSettingsService } from "../get-settings.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  search: string;

  constructor(private authService: AuthService, private signUp: SignUpService,
    private state: StateManagementService, private settings: GetSettingsService) { }

  ngOnInit() {
    this.search = "";
  }

  s() {
    this.settings.searchProducts(this.search, "searchBar");
    this.search = "";
  }

  signIn(provider: string) {
    if (provider === "google") {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (userData) => {
          this.signUp.signUp(provider, userData.id, userData.idToken)
        }
      );
    } else {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
        (userData) => {
          this.signUp.signUp(provider, userData.id, userData.token)
        }
      )
    }
  }
}

