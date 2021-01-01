import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { StateManagementService } from "./state-management.service"

@Injectable({
  providedIn: 'root'
})
export class AdminFunctionsService {

  constructor(private http: HttpClient, private state: StateManagementService,
    private router: Router) { };

  saveNewProduct(product: any) {
    this.router.navigate(['home'], { skipLocationChange: true });
    return this.http.post<any>(this.state.state.urls.saveproduct, {
      token: this.state.state.user_jwt_token,
      product
    })
      .subscribe({
        next: data => {
          alert(data.messege);
        },
        error: error => {
          alert(error.error);
        }
      })
  }

  searchUser(mode: string, email?: string) {
    return this.http.post<any>(this.state.state.urls.searchUser, {
      token: this.state.state.user_jwt_token, mode: mode, email: email ? email : "none"
    })
      .subscribe({
        next: data => {
          this.state.state.user_search_res = data.data;
        },
        error: error => {
          alert(error.error);
        }
      })
  }

  action(_id: string, action: string) {
    return this.http.post<any>(this.state.state.urls.actions, {
      token: this.state.state.user_jwt_token,
      target_id: _id,
      action: action
    })
      .subscribe({
        next: data => {
          alert(data.messege)
        },
        error: error => alert(error.error.messege)
      })
  }

  removeUser(_id: string, index: number) {
    return this.http.post<any>(this.state.state.urls.removeUser, {
      token: this.state.state.user_jwt_token,
      target_id: _id,
    }).subscribe({
      next: data => {
        this.state.state.user_search_res.splice(index, 1);
        alert(data.messege);
      },
      error: error => alert(error.error.messege)
    })
  }

  editSettings(settings: any) {
    this.router.navigate(['home'], { skipLocationChange: true });
    return this.http.post<any>(this.state.state.urls.editSettings, {
      token: this.state.state.user_jwt_token,
      title: settings.title,
      credit: settings.credit_builder,
      disablepaymentd: settings.is_allowed_to_buy,
      termsofuse: settings.terms_of_use,
      privacypolicy: settings.privacy_policy
    }).subscribe({
      next: data => {
        alert(data.messege);
      },
      error: error => alert(error.error.messege)
    })
  }
}

