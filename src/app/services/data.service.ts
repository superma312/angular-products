import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://product-subscription.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get(`${this.REST_API_SERVER}/api/products`);
  }
}