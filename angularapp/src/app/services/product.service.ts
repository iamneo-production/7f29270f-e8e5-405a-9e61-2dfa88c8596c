import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _http: HttpClient) { }

  fetchProductList(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/admin/products")
  }

  fetchProductById(id: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/admin/products/" + id)
  }

  addProduct(product: Product): Observable<any> {
    return this._http.post<any>("http://localhost:8080/admin/products", product)
  }

  editProduct(product: Product): Observable<any> {
    return this._http.post<any>("http://localhost:8080/admin/products", product)
  }

  deleteProductById(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/admin/products/" + id)
  }

}


//https://8080-abdcaefccfdaacebccbcdaccaffbdddbad.examlyiopb.examly.io/admin/products