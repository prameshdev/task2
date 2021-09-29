import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PopUpRoutingModule } from './pop-up-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [ 
  { path: '', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopUpRoutingModule
  ]
})
export class PopUpModule { }
