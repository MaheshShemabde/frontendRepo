import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Products';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8083/userLogin';

  constructor(private http: HttpClient) { }

  createUser(user:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/createUser`,user);
  };

  loginUser(user:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/loginUser`,user)
  }
  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

}
