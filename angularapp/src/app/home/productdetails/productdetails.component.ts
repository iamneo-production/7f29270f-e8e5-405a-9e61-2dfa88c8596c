import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product = new Product()
  id!: number

  constructor(private _router: Router, private _pservice: ProductService, private _cservice: CartService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this._pservice.fetchProductById(this.id).subscribe(
      data => {
        console.log("Product " + this.id + " is received")
        this.product = data
      },
      error => console.log(error)
    )
  }

  addToCart() {
    this._cservice.addCartItem(this.product.quantity, this.id).subscribe(
      data => {
        console.log("Product " + this.id + " is added to cart")
      },
      error => console.log(error)
    )

    this._router.navigate(["/cart/2"])
  }
}
