import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GetSettingsService } from "../get-settings.service"
import { StateManagementService } from "../state-management.service";
import { ProductActionsService } from "../product-actions.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  mainImage: string;
  images: string[];
  selectedImage: string;
  q: number;
  constructor(private state: StateManagementService,
    private settings: GetSettingsService,
    private actions: ProductActionsService) { }

  ngOnInit() {
    this.q = 1;
    this.mainImage = this.state.state.selected_product.mainImage;
    this.images = this.state.state.selected_product.images
  }

  select(isMain: boolean, i?: number) {
    console.log(isMain);
    if (isMain) {
      this.selectedImage = this.state.state.selected_product.mainImage;
      return;
    } else {
      this.selectedImage = this.state.state.selected_product.images[i]
    }
  }

  check(): boolean {
    if (this.q &&
      this.q > 0 &&
      this.q <= this.state.state.selected_product.stock &&
      !(this.q % 1)) {
      return true;
    } else {
      return false;
    }
  }

}
