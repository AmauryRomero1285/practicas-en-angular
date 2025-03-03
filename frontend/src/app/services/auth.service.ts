import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://localhost:3500';
  
  constructor(private http:HttpClient) { }


  login(user: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { user, password });
  }

  register(username: string, email: string, password: string, verifyPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, email, password, verifyPassword });
  }

}
