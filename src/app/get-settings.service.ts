import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { StateManagementService } from "./state-management.service"
@Injectable({
  providedIn: 'root'
})
export class GetSettingsService {

  constructor(private http: HttpClient, private router: Router,
    private state: StateManagementService) {
    this.getSettings();
  }

  getSettings() {
    return this.http.get<any>(this.state.state.urls.getsettings)
      .subscribe({
        next: data => {
          this.state.state.site_settings.title = data[0].apptitle;
          this.state.state.site_settings.is_allowed_to_buy = data[0].paymentdisabled;
          this.state.state.site_settings.credit_builder = data[0].creditbuilder;
          this.state.state.site_settings.total_pages = data[0].pages;
          this.state.state.site_settings.terms_of_use = data[0].termsofuse;
          this.state.state.site_settings.privacy_policy = data[0].privacypolicy;
          // console.log(data);
        },
        error: error => {
          alert(error.error.messege);
          // console.log(error);
        }
      })
  }
  
  searchProducts(search: string, from: string) {
    this.state.state.site_settings.is_loading_page = true;
    if (from === "searchBar") {
      this.state.state.site_settings.current_page = 1;
    }
    if (this.state.state.is_logged) {
      return this.http.post<any>(this.state.state.urls.getproductsuser,
        {
          token: this.state.state.user_jwt_token,
          page: this.state.state.site_settings.current_page,
          search: search
        })
        .subscribe({
          next: data => {
            
            // console.log(data, this.state.state.site_settings.current_page);
            this.state.state.site_settings.current_search = search;
            this.state.state.site_settings.total_pages = data.totalPages;
            this.state.state.products = data.results;
            this.router.navigate(['search'], { skipLocationChange: true });
            window.scrollTo(0, 0);
            // console.log(this.state.state.tournaments);
            this.state.state.site_settings.is_loading_page = false;
          },
          error: error => {
            alert(error.error);
            this.state.state.site_settings.is_loading_page = false;
          }
        })
    } else {
      return this.http.post<any>(this.state.state.urls.getproducts,
        {
          page: this.state.state.site_settings.current_page,
          search: search
        })
        .subscribe({
          next: data => {
            
            // console.log(data, this.state.state.site_settings.current_page);
            this.state.state.site_settings.current_search = search;
            this.state.state.site_settings.total_pages = data.totalPages;
            this.state.state.products = data.results;
            this.router.navigate(['search'], { skipLocationChange: true });
            window.scrollTo(0, 0);
            // console.log(this.state.state.tournaments);
            this.state.state.site_settings.is_loading_page = false;
          },
          error: error => {
            alert(error.error);
            this.state.state.site_settings.is_loading_page = false;
          }
        })
    }
    // console.log(this.state.state.site_settings.current_page)

  }



  // deleteProduct(mode: string) {
  //   this.router.navigate(['home'], { skipLocationChange: true });
  //   return this.http.post<any>(this.state.state.urls.deleteTournament,
  //     {
  //       token: this.state.state.user_jwt_token,
  //       mode: mode,
  //       target_id: this.state.state.scoped_tournament._id
  //     })
  //     .subscribe({
  //       next: data => {
  //         // console.log(data);
  //         alert(data.messege);
  //       },
  //       error: error => {
  //         alert(error.error.messege);
  //         // console.log(error);
  //       }
  //     })
  // }

  // editProduct(mode: string) {

  //   if (mode === "edit") {
  //     this.router.navigate(['home'], { skipLocationChange: true });
  //   }
  //   return this.http.post<any>(this.state.state.urls.editTournament,
  //     {
  //       token: this.state.state.user_jwt_token,
  //       action: mode,
  //       target_id: this.state.state.scoped_tournament._id,
  //       changes: mode === "edit" ? this.state.state.scoped_tournament : undefined

  //     })
  //     .subscribe({
  //       next: data => {
  //         // console.log(data);
  //         alert(data.messege);
  //       },
  //       error: error => {
  //         alert(error.error.messege);
  //         // console.log(error);
  //       }
  //     })
  // }

  // pay(order: any, delails: any) {
  //   this.router.navigate(['home'], { skipLocationChange: true });
  //   return this.http.post<any>('http://localhost:3000/join',
  //     {
  //       token: this.state.state.user_jwt_token,
  //       order: order,
  //       details: delails
  //     })
  //     .subscribe({
  //       next: data => {
  //         alert(data.messege);
  //       },
  //       error: error => {
  //         alert(error.error.messege);
  //         console.log(error);
  //       }
  //     })
  // }
}
