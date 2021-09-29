import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailsComponent } from './pop-up/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
  {
    path: 'lazy',
    // outlet: 'modal',
    component: ProductDetailsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pop-up/pop-up-routing.module').then(m => m.PopUpRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
