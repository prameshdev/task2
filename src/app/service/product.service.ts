import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getAllTheProducts(){
    const someREsults = this.http.get('https://fakestoreapi.com/products');
    console.log('REsults', someREsults );
    return someREsults;
  }
}
