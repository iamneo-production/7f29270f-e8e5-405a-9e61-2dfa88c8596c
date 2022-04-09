import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
  fetchOrders(id: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/myorders/"+ id)
  }
  placeOrder(username: string,quantity:number, id: number): Observable<any> {
    return this._http.post<any>(`http://localhost:8080/product/${id}`,{username, quantity})
  }
  saveProduct(uid: string): Observable<any> {
    return this._http.post<any>(`http://localhost:8080/saveOrder/${uid}`,{uid})
  }
  getUserProducts(): Observable<any>{
    return this._http.get<any>("http://localhost:8080/admin/orders")
  }
}
