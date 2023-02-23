import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl = "http://localhost:3000/users";
  createUrl = "http://localhost:3000/user";
  deleteUrl = "http://localhost:3000/deleteuser";
  constructor(private http:HttpClient) { }

  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  createUser(data:any):Observable<any>{
    return this.http.post(`${this.createUrl}`,data);
  }

  deleteUser(id:any):Observable<any>{
    let ids =id;
    return this.http.delete(`${this.deleteUrl}/${ids}`)
  }
}
