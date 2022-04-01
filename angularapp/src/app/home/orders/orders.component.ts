import { OrderService } from './../../services/order.service';
import { Orders } from './../../model/Orders';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  _order!: Orders[]
  constructor(private _osevice: OrderService, private _router: Router) { }

  ngOnInit(): void {
    this._osevice.fetchOrders(2).subscribe(
      data => {
        this._order = data;
        console.log("Order items recieved")
        console.log("")
      },
      error => console.log(error)
    )
  }
}
