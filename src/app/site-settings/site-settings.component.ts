import { Component, OnInit } from '@angular/core';
import { StateManagementService } from "../state-management.service";
import { AdminFunctionsService } from "../admin-functions.service";
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.css']
})
export class SiteSettingsComponent implements OnInit {
  file: any;
  site_settings: any
  constructor(private state: StateManagementService,
    private admin: AdminFunctionsService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.site_settings = this.state.state.site_settings;
    this.site_settings = {
      terms_of_use: "none",
      privacy_policy: "none",
      title: this.state.state.site_settings.title,
      credit_builder: this.state.state.site_settings.credit_builder,
      payment_currency: this.state.state.site_settings.payment_currency,
      is_allowed_to_buy: this.state.state.site_settings.is_allowed_to_buy
    }
  }
  onSelectFile1(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.site_settings.terms_of_use = event.currentTarget.result.toString();
      }
    }
  }

  onSelectFile2(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.site_settings.privacy_policy = event.currentTarget.result.toString();
      }
    }
  }

}
