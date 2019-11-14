import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductserviceService } from '../services/productservice.service';
import { ActivatedRoute } from '@angular/router';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddproductComponent implements OnInit {
  id: number;
  products: any;
  constructor(private productserviceservice: ProductserviceService, private route: ActivatedRoute) { }
  MyForm: FormGroup;
  data: any;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    console.log('changes');
  }

  ngOnInit() {
    this.MyForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      imageAlt: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.required),




    });
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.id = +params.id; } );
      // tslint:disable-next-line: align
      this.productserviceservice.detailsdispay(this.id).subscribe(response => {
        this.data = response;
        this.MyForm.patchValue({
          title: this.data.title,
          imageUrl: this.data.imageUrl,
          price: this.data.price,
          description: this.data.description,

          isAvailable: this.data.isAvailable
        });
    });
  }

  onSubmit() {
    console.log(this.MyForm);
    if (this.id) {
      this.productserviceservice.updateproducts(this.MyForm.value, this.id).subscribe(Response => { console.log(Response);
      });

    } else {
      this.productserviceservice.addProducts(this.MyForm.value).subscribe(Response => { this.products = Response; });


    }
  }
}
