import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
  fetchOrders(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/myorders/"+ id)
  }
  placeOrder(quantity:number, id: number): Observable<any> {
    return this._http.post<any>(`http://localhost:8080/product/${id}`,quantity)
  }
}
