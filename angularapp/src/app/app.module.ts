import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { NavbarComponent } from './home/navbar/navbar.component';
// import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
// import { HomeComponent } from './home/home.component';
// import { CorouselComponent } from './home/corousel/corousel.component';
// import { ProductsComponent } from './home/products/products.component';
// import { HomePageComponent } from './home/home-page/home-page.component';
// import { CartItemsComponent } from './home/cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    DashboardComponent,
    ProductEditComponent,
    AdminComponent,
    AdminNavComponent,
    // NavbarComponent,
    // ProductdetailsComponent,
    // HomeComponent,
    // CorouselComponent,
    // ProductsComponent,
    // HomePageComponent,
    // CartItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
