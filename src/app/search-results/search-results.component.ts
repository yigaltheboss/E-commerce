import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GetSettingsService } from "../get-settings.service"
import { StateManagementService } from "../state-management.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private state: StateManagementService,
    private settings: GetSettingsService,
    private router: Router) { }

  ngOnInit() {
  }

  select(i: number) {
    this.state.state.selected_product = this.state.state.products[i];
    this.router.navigate(['details'], { skipLocationChange: true });
  }

  switchPage(operation: string) {
    window.scrollTo(0, 0);
    if (!this.state.state.site_settings.is_loading_page) {
      if (operation === "next") {
        this.state.state.site_settings.current_page += 1;
        this.settings.searchProducts(this.state.state.site_settings.current_search, "page");
        return;
      } else {
        this.state.state.site_settings.current_page -= 1;
        this.settings.searchProducts(this.state.state.site_settings.current_search, "page");
      }
    } else return;
  }
}
