import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GetSettingsService } from "../get-settings.service"
import { StateManagementService } from "../state-management.service";
// import {
//   IPayPalConfig,
//   ICreateOrderRequest
// } from 'ngx-paypal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orderId: any;
  constructor(private settings: GetSettingsService,
    private state: StateManagementService,
    private router: Router) { }

  ngOnInit() {
    this.settings.getSettings();
  }

  start(tournament: any) {
    // this.state.state.scoped_tournament = tournament;
    this.router.navigate(['start'], { skipLocationChange: true });

  }

  switchPage(operation: string) {
    window.scrollTo(0, 0);
    if (!this.state.state.site_settings.is_loading_page) {
      this.state.state.site_settings.is_loading_page = true;
      if (operation === "next") {
        this.state.state.site_settings.current_page += 1;
        this.settings.getSettings();
        return;
      } else {
        this.state.state.site_settings.current_page -= 1;
        this.settings.getSettings();
      }
    } else return;
  }
  openPayment() {
    this.router.navigate(['pay'], { skipLocationChange: true });
    return;
  }
  openJoin(selected_id: string, selected_pay: number) {
    // this.state.state.selected_tournament_id = {
    //   _id: selected_id, pay: selected_pay
    // }
    if (this.state.state.current_user.gameId === 'none') {
      this.state.state.current_user.gameId = '';
      return;
    }
  }
}
