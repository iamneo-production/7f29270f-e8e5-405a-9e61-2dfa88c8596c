import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  _cartItems!: CartItem[]

  constructor(private _csevice: CartService, private _router: Router) { }

  ngOnInit(): void {

    this._csevice.fetchCartItems(2).subscribe(
      data => {
        this._cartItems = data;
        console.log("Cart items recieved")
      },
      error => console.log(error)
    )

  }

  deleteCartItem(id: number) {
    console.log(id)
    this._csevice.deleteCartItem(id).subscribe(
      data => {
        console.log(data)
      },
      error => console.log(error)
    )

    location.reload(); 
  }

}
