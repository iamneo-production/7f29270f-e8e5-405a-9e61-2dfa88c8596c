import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
  fetchOrders(id: number): Observable<any> {
    return this._http.get<any>("https://8080-eadbffafeaafedcebccbcdaccaffbdddbad.examlyiopb.examly.io/myorders/"+ id)
  }
  placeOrder(quantity:number, id: number): Observable<any> {
    return this._http.post<any>(`https://8080-eadbffafeaafedcebccbcdaccaffbdddbad.examlyiopb.examly.io/product/${id}`,quantity)
  }
}
