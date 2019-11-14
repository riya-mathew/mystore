import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { Product } from 'src/app/model/product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: any;
  constructor(private productserviceService: ProductserviceService) {  }
  getProducts(): void {
      this.productserviceService.getProducts().subscribe( Response => { this.products = Response; });
      }
  ngOnInit() {
    this.getProducts();

  }
}




