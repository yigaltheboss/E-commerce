import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { StateManagementService } from "./state-management.service"

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient, private router: Router, 
     private state: StateManagementService) { }

  pay(order: any, delails: any) {
    this.router.navigate(['home'], { skipLocationChange: true });
    return this.http.post<any>('http://localhost:3000/join',
      {
        token: this.state.state.user_jwt_token,
        order: order,
        details: delails
      })
      .subscribe({
        next: data => {
          alert(data.messege);
        },
        error: error => {
          alert(error.error.messege);
          console.log(error);
        }
      })
  }
}
