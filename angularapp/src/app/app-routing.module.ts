import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
// import { CartItemsComponent } from './home/cart-items/cart-items.component';
// import { HomePageComponent } from './home/home-page/home-page.component';
// import { HomeComponent } from './home/home.component';
// import { ProductdetailsComponent } from './home/productdetails/productdetails.component';



const routes: Routes = [
    {
      path: "admin",
      component: AdminComponent,
      children: [
        { path: "", component: DashboardComponent},
        { path: "addProduct", component: AddproductComponent},
        { path: "productEdit/:id", component: ProductEditComponent}
      ]
    }
    // {
    //   path:'', 
    //   component: HomeComponent,
    //   children: [
    //     { path: "", component: HomePageComponent},
    //     { path:'home', component: HomePageComponent},
    //     { path: 'product/:id',component:ProductdetailsComponent},
    //     { path: 'cart/:id', component: CartItemsComponent }
    //   ]
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
