import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyJsonApiService {
baseUrl:any
  constructor(private http:HttpClient) { 
    this.baseUrl = "https://dummyjson.com";
  }
 public getAllProduct():Observable<any>{
    return this.http.get(this.baseUrl+'/products?limit=100')
  }
  public getProduct(id):Observable<any>{
    return this.http.get(this.baseUrl+'/product/'+id)
  }
  public getProductCategory():Observable<any>{
    return this.http.get(this.baseUrl+'/products/categories')
  }
  public getProductList(payload:any):Observable<any>{
    return this.http.get(this.baseUrl+'/products/category/'+payload)
  }
}
