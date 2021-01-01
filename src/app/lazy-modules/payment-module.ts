import { NgModule } from '@angular/core';
import { NgxPayPalModule } from 'ngx-paypal';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { PipesModule } from "../pipes.module";

import { PaymentComponent } from "../payment/payment.component";


const routes: Routes = [{
    path: '', component: PaymentComponent,
}
]

@NgModule({
    declarations: [
        PaymentComponent,
      
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        NgxPayPalModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class PaymentModule { }
