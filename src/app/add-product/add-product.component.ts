import { Component, OnInit } from '@angular/core';
import { AdminFunctionsService } from "../admin-functions.service";
import { product } from "../interfaces/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  timeZone: any;
  productForm: product;
  constructor(private admin: AdminFunctionsService) { }

  ngOnInit() {
    this.productForm = {
      _id: "",
      title: "",
      description: "",
      mainImage: "",
      images: ["", ""],
      price: 0,
      oldPrice: 0,
      discountPresent: 0,
      shippingPrice: 0,
      shippingTime: 0,
      shippingFrom: "",
      shippingLimit: "",
      keywords: "",
      stock: 0,
      isEvedible: true
    }
  }

  clcDiscount() {
    if (this.productForm.price <= 0 || this.productForm.oldPrice <= 0) {
      this.productForm.discountPresent = 0;
      return this.productForm.discountPresent;
    } else {
      this.productForm.discountPresent =
        Math.round(((this.productForm.oldPrice - this.productForm.price) / this.productForm.oldPrice) * 100);
      if (this.productForm.discountPresent < 0) {
        this.productForm.discountPresent = 0;
        return this.productForm.discountPresent;
      } else {
        return this.productForm.discountPresent;
      }
    }
    // this.productForm.discountPresent =
    //   Math.round(this.productForm.price * this.productForm.discountPrice / 100);

  }

  onSelectFile1(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed

        this.productForm.mainImage = (event.target as FileReader).result.toString();
      }
    }
  }

  onSelectFile2(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed

        this.productForm.images[0] = (event.target as FileReader).result.toString();
      }
    }
  }

  onSelectFile3(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed

        this.productForm.images[1] = (event.target as FileReader).result.toString();
      }
    }
  }
}
