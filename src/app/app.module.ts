import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RiyaComponent } from './riya/riya.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'addtocart',
    component: AddproductComponent
  },
  {
    path: 'addtocart/:id',
    component: AddproductComponent
  },
  {
  path: 'details',
  component: DetailsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    RiyaComponent,
    ProductComponent,
    AddproductComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
