import { Component, OnInit, NgZone } from '@angular/core';
import { StateManagementService } from "../state-management.service";
import { Router } from "@angular/router";
import { GetSettingsService } from "../get-settings.service";
import { IS_PROD } from "../constants/initial-state";
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private state: StateManagementService,
    private settings: GetSettingsService,
    private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.initConfig();
  }

  public payPalConfig?: any;



  private initConfig() {
    this.payPalConfig = {
      clientId: IS_PROD ? 'AZ-LjsaYm-w1t9RHlBdD5ohXzz5ZnxzpJRBXTO-mAMlz0-kqnmpVtr0eoiqfTyZiLelaqpjhHAbX6DnA' : 'Ad7fWuYqrz-VoInw19jKoISfeyZ492EavhKpSLR71CryesGvzjy1Y1Crtxmw3vdMdjHNbv1SaWOp7EqV',
      // for creating orders (transactions) on server see
      // https://developer.paypal.com/docs/checkout/reference/server-integration/set-up-transaction/
      createOrderOnServer: async (data) => {
        console.log(this.payPalConfig.clientId);
        let x = await fetch('http://localhost:3000/createOrder',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: this.state.state.user_jwt_token,
              // tour_id: this.state.state.selected_tournament_id._id,
              game_id: this.state.state.current_user.gameId
            })
          })
        let y = await x.json();

        return y.orderID
      },
      onApprove: (data, actions) => {
        actions.order.get().then(async details => {
          this.zone.run(() => {
            // this.settings.pay(data, details)
          });
        })



      },

      onClientAuthorization: (data) => {

      },
      // authorizeOnServer: (approveData) => {

      // },
      onCancel: (data, actions) => {

      },
      onError: err => {
        console.log(err);
        this.zone.run(() => {
          this.nav();
        });
      },
      onClick: (data, actions) => {

      },
    };
  }

  nav() {
    this.router.navigate(['home'], { skipLocationChange: true });
  }
}
