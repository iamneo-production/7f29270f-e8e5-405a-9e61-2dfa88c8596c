import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private _http: HttpClient) { }

  fetchCartItems(id: number): Observable<any> {
    return this._http.get<any>("https://8080-eadbffafeaafedcebccbcdaccaffbdddbad.examlyiopb.examly.io/cart/" + id)
  }

  deleteCartItem(id: number): Observable<any> {
    console.log(id)
    return this._http.delete<any>("https://8080-eadbffafeaafedcebccbcdaccaffbdddbad.examlyiopb.examly.io/cart/" + id)
  }

  addCartItem(quantity:number, id: number): Observable<any> {
    return this._http.post<any>(`https://8080-eadbffafeaafedcebccbcdaccaffbdddbad.examlyiopb.examly.io/home/${id}`, quantity)
  }
}
